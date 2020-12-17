import * as mathjs from 'mathjs';
import numberToEnglish from './NumberToEnglish';

export const generateQuestion = (questiontype, wordquestions) => {
  const { type, nos, digits, inwords } = questiontype;
  if (type === '+-' || type === '+-x') return generatePlusMinusQuestion(questiontype);
  else if (type === 'WORD') return generateWordsQuestion(questiontype, wordquestions);

  return {
    question: '', // '2+3',
    answer: '', // mathjs.evaluate('2+3'),
  };
}; //

// export const generateMultiQuestion = (questiontype) => {
//   let currentnumber = 0;
//   let question = '';
//   let answer = 0;
//   const { type, nos, digits, inwords } = questiontype;
//   let { decimals = 0 } = questiontype;
//   if (inwords) decimals = 0;
//   const symbols=[];

//   const totaldigits = digits + decimals;
//   for (let i = 0; i < nos; i += 1) {
//     const temptype = type;
//     let sign = '+';
//     if (i === 0 || answer < 10 ** (totaldigits - 1)) sign = '+';
//     else if ((answer >= 100 || answer <= 10) && type === '+-x') sign = randomSign('+-');
//     else if (i>1 && type === '+-x' && !symbols.includes('x') && answer>9 && answer<100) sign = 'x'
//     else sign = randomSign(temptype);
//     // const sign = i === 0 || answer < 10 ** (totaldigits - 1) ? '+' : randomSign(temptype);
//     symbols.push(sign);

//     let tonumber = 10 ** totaldigits - 1;
//     let fromnumber = 10 ** (totaldigits - 1) + 1;
//     if (sign === 'x') {
//       fromnumber = 2;
//       tonumber = 9;
//     } else if (sign === '-' && tonumber > answer) tonumber = answer;
//     // console.log(`${fromnumber},${tonumber}`)
//     currentnumber = randomIntFromInterval(fromnumber, tonumber);
//     if (sign === '+' || sign === '-') answer += (sign === '+' ? 1 : -1) * currentnumber;
//     else if (sign === 'x') answer *= currentnumber;
//     if (!inwords) question = `${question} ${i > 0 ? sign : ''} ${currentnumber / (decimals === 0 ? 1 : 10 ** decimals)}`;
//     else if (inwords) {
//       const toword = numberToEnglish(currentnumber);
//       question = `${question}${i <= 0 ? '' : sign === '+' ? ' <u><i>plus</i></u> ' : sign === '-' ? ' <u><i>minus</i></u> ' : ' u><i>times</i></u> '}${toword}`;
//     }
//   }
//   answer /= decimals === 0 ? 1 : 10 ** decimals;
//   console.log(`${question} ? ${answer}`);
//   return {
//     question: question,
//     answer: answer,
//   };
// }

export const generateWordsQuestion = (questiontype, wordquestions) => {
  const questionno = randomIntFromInterval(0, wordquestions.length - 1);
  const question = wordquestions[questionno];
  const { type, nos, digits, inwords } = questiontype;
  let { decimals = 0 } = questiontype;
  if (inwords) decimals = 0;
  const totaldigits = digits + decimals;
  const tonumber = 10 ** totaldigits - 1;
  const fromnumber = 10 ** (totaldigits - 1) + 1;

  const q = question.question;
  const qparams = {};
  for (let i = 0; ; i += 1) {
    if (!(i in question)) break;
    qparams[i] = question[i];
  }

  Object.keys(qparams)
    .sort()
    .forEach((key) => {
      const params1 = { ...qparams };
      const param = qparams[key];
      if (param.indexOf('{val}') > -1) params1.val = randomIntFromInterval(fromnumber, tonumber);
      const substitute = replaceValues(param, params1);
      const evalstr = evaluate(substitute);
      qparams[key] = evalstr;
    });

  const answer = evaluate(replaceValues(question.answer, qparams));
  const questionstr = replaceValues(question.question, qparams);

  return { answer: answer, question: questionstr };
};

export const generatePlusMinusQuestion = (questiontype) => {
  let currentnumber = 0;
  let question = '';
  let answer = 0;
  const { type, nos, digits, inwords } = questiontype;
  let { decimals = 0 } = questiontype;
  if (inwords) decimals = 0;
  const symbols = [];

  const totaldigits = digits + decimals;
  for (let i = 0; i < nos; i += 1) {
    const temptype = type;
    let sign = '+';
    if (i === 0 || answer < 10 ** (totaldigits - 1)) sign = '+';
    else if ((answer >= 100 || answer <= 10) && type === '+-x' && digits > 1) sign = randomSign('+-');
    else if (answer > 10 && type === '+-x' && digits === 1) sign = randomSign('+-');
    else if (i > 1 && type === '+-x' && !symbols.includes('x') && answer > 9 && answer < 100 && digits > 1) sign = 'x';
    else if (i > 1 && type === '+-x' && !symbols.includes('x') && answer < 10 && digits === 1) sign = 'x';
    else sign = randomSign(temptype);
    // const sign = i === 0 || answer < 10 ** (totaldigits - 1) ? '+' : randomSign(temptype);
    symbols.push(sign);

    let tonumber = 10 ** totaldigits - 1;
    let fromnumber = 10 ** (totaldigits - 1) + 1;
    if (sign === 'x') {
      fromnumber = 2;
      tonumber = 9;
    } else if (sign === '-' && tonumber > answer) tonumber = answer;
    // console.log(`${fromnumber},${tonumber}`)
    currentnumber = randomIntFromInterval(fromnumber, tonumber);
    if (sign === '+' || sign === '-') answer += (sign === '+' ? 1 : -1) * currentnumber;
    else if (sign === 'x') answer *= currentnumber;
    if (!inwords) question = `${question} ${i > 0 ? sign : ''} ${currentnumber / (decimals === 0 ? 1 : 10 ** decimals)}`;
    else if (inwords) {
      const toword = numberToEnglish(currentnumber);
      question = `${question}${i <= 0 ? '' : sign === '+' ? ' <u><i>plus</i></u> ' : sign === '-' ? ' <u><i>minus</i></u> ' : ' <u><i>times</i></u> '}${toword}`;
    }
  }
  answer /= decimals === 0 ? 1 : 10 ** decimals;
  console.log(`${question} ? ${answer}`);
  return {
    question: question,
    answer: answer,
  };
};

export const randomIntFromInterval = (min, max) => {
  // min and max included
  // if (decimals === 0)
  return Math.floor(Math.random() * (max - min + 1) + min);
  // else {
  //     const decimalnumber = (10 ** decimals);
  //     console.log(`${(max * decimalnumber)},${(min * decimalnumber) + 1}`)
  //     return Math.floor(Math.random() * ((max * decimalnumber) - (min * decimalnumber) + 1) + (min * decimalnumber)) / decimalnumber;
  // }
};

// const randomSign = () => {
//   return Math.round(Math.random()) * 2 - 1;
// };

const randomSign = (type) => {
  const signs = type.split('');
  const randval = randomIntFromInterval(0, signs.length - 1);
  return signs[randval];
  // else {
  //     const decimalnumber = (10 ** decimals);
  //     console.log(`${(max * decimalnumber)},${(min * decimalnumber) + 1}`)
  //     return Math.floor(Math.random() * ((max * decimalnumber) - (min * decimalnumber) + 1) + (min * decimalnumber)) / decimalnumber;
  // }
};

export const evaluate = (str) => {
  return mathjs.evaluate(str);
};

export const replaceString = (str, ...args) => {
  let base = str;
  for (let i = 0; i < args.length; i += 1) base = base.replace(`{${i}}`, args[i]);

  return base;
  // const replacements = { '{NAME}': 'Mike', '{AGE}': '26', '{EVENT}': '20' };
  //   let str = 'My Name is {NAME} and my age is {AGE}.';

  // str = str.replace(/{\w+}/g, (all) => {
  //   return replacements[`{${all}}`] || all;
  // });
};

export const replaceValues = (str, valueHash) => {
  let base = str;
  base = base.replace(/{\w+}/g, (all) => {
    console.log('[Utils.replaceValue]', all);
    return valueHash[all.replace('{', '').replace('}', '')]; // || all;
  });
  return base;
};
