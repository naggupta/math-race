import * as mathjs from 'mathjs';
import moment from 'moment';
import numberToEnglish from './NumberToEnglish';

export const generateQuestion = (questiontype, wordquestions, wordquestionsindexs = []) => {
  const { type, nos, digits, inwords } = questiontype;
  if (type === '+-' || type === '+-x') return generatePlusMinusQuestion(questiontype);
  else if (type === 'x') return generateMultiplyQuestion(questiontype);
  else if (type === '/') return generateDivideQuestion(questiontype);
  else if (type === 'X2') return generateSquareQuestion(questiontype);
  else if (type === 'x/y') return generateFractionQuestion(questiontype);
  else if (['WORD', 'MONEY', 'FILL', 'CONVERSIONS'].includes(type)) return generateWordsQuestion(questiontype, wordquestions, wordquestionsindexs);
  else if (['TIMEHRS+-'].includes(type)) return generateTimeHrsArthematicQuestion(questiontype);
  else if (['TIME+-'].includes(type)) return generateTimeArthematicQuestion(questiontype);
  else if (['BAL'].includes(type)) return generateBalance(questiontype);
  return {
    question: '', // '2+3',
    questions: [],
    answers: [],
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

export const generateBalance = (questiontype) => {
  let question = '';
  const questions = [];
  const answers = [];
  let answer = 0;
  const { type, nos, digits, inwords, level } = questiontype;
  let { decimals = 0 } = questiontype;
  if (inwords) decimals = 0;
  const symbols = [];

  const totaldigits = digits + decimals;
  for (let i = 0; i < nos; i += 1) {
    const temptype = type;
    const sign = '|';

    let tonumber = 99;
    const issingle = randomIntFromInterval(0, 1);
    if (issingle) tonumber = 9;
    const fromnumber = 1;
    const currentnumber = randomIntFromInterval(fromnumber, tonumber);

    if (!inwords) {
      const q = `${i > 0 ? sign : ''} ${currentnumber < 10 && level === 1 ? `&nbsp;${currentnumber}` : currentnumber}`;
      question = `${question} ${q}`;
      questions.push(q.replace('|', ''));
    } else if (inwords) {
      const toword = numberToEnglish(currentnumber);
      const q = `${i <= 0 ? '' : ' <u><i>|</i></u> '}${toword}`;
      question = `${question}${q}`;
      questions.push(q.replace('|', ''));
    }
    answer = answer * 10 + currentnumber;
    answers.push(answer);
  }
  // console.log(`${question} ? ${answer}`);

  questions.push('?');
  // console.log('[Question Generator]', questions);
  return {
    question: question,
    questions: questions,
    answers: answers,
    answer: answer,
  };
};

export const generateMultiplyQuestion = (questiontype) => {
  // let question = '';
  // let answer = 0;
  const { type, digits, inwords, tens } = questiontype;
  const nos = 2;
  let { decimals = 0 } = questiontype;
  if (inwords) decimals = 0;
  const symbols = [];
  const tonumber = 10 ** digits - 1;
  const fromnumber = 10 ** (digits - 1) + 1;
  const multiplicend = randomIntFromInterval(fromnumber, tonumber);
  const multiplier = randomIntFromInterval(2, 9);
  const answer = multiplier * multiplicend;
  // console.log(`${question} ? ${answer}`);
  let question = '';

  if (!inwords) question = `${multiplicend} X ${multiplier}`;
  else if (inwords) question = `${numberToEnglish(multiplicend)} X ${numberToEnglish(multiplier)}`;

  return {
    question: question,
    questions: [],
    answer: answer,
  };
};

export const generateDivideQuestion = (questiontype) => {
  // let question = '';
  // let answer = 0;
  const { type, digits, inwords, tens } = questiontype;
  const nos = 2;
  let { decimals = 0 } = questiontype;
  if (inwords) decimals = 0;
  const symbols = [];
  const tonumber = 10 ** digits - 1;
  const fromnumber = 10 ** (digits - 1) + 1;
  const answer = randomIntFromInterval(fromnumber, tonumber);
  const divider = randomIntFromInterval(2, 9);
  const dividend = answer * divider;
  // console.log(`${question} ? ${answer}`);
  let question = '';

  if (!inwords) question = `${dividend} / ${divider}`;
  else if (inwords) question = `${numberToEnglish(dividend)} X ${numberToEnglish(divider)}`;

  return {
    question: question,
    questions: [],
    answer: answer,
  };
};

export const generateFractionQuestion = (questiontype) => {
  const { type, digits, inwords } = questiontype;
  const tonumber = 10 ** (digits + 1) - 1;
  const fromnumber = 10 ** digits + 1;

  const tofraction = 10 ** digits - 1;
  const fromfraction = 10 ** (digits - 1) + 1;

  const intermediateno = randomIntFromInterval(fromnumber, tonumber);
  const denominator = randomIntFromInterval(fromfraction, tofraction);
  let question = intermediateno * denominator;
  const neumerator = randomIntFromInterval(fromfraction, tofraction, [denominator]);
  const answer = intermediateno * neumerator;

  question = `<sup>${neumerator}</sup>&frasl;<sub>${denominator}</sub> of ${question}`;
  return {
    question: question,
    questions: [],
    answer: answer,
  };
};

export const generateSquareQuestion = (questiontype) => {
  let currentnumber = 0;
  let question = '';
  let answer = 0;
  const { type, digits, inwords, tens } = questiontype;
  const nos = 2;
  let { decimals = 0 } = questiontype;
  if (inwords) decimals = 0;
  const symbols = [];

  const totaldigits = digits + decimals;
  // for (let i = 0; i < nos; i += 1) {
  const temptype = type;
  // let sign = '+';
  // if (i === 0 || answer < 10 ** (totaldigits - 1)) sign = '+';
  // else if ((answer >= 100 || answer <= 10) && type === '+-x' && digits > 1) sign = randomSign('+-');
  // else if (answer > 10 && type === '+-x' && digits === 1) sign = randomSign('+-');
  // else if (i > 1 && type === '+-x' && !symbols.includes('x') && answer > 9 && answer < 100 && digits > 1) sign = 'x';
  // else if (i > 1 && type === '+-x' && !symbols.includes('x') && answer < 10 && digits === 1) sign = 'x';
  // else sign = randomSign(temptype);
  // const sign = i === 0 || answer < 10 ** (totaldigits - 1) ? '+' : randomSign(temptype);
  // symbols.push(sign);

  let tonumber = 10 ** totaldigits - 1;
  if (tens === 'Y' && totaldigits === 2) tonumber = 19;

  const fromnumber = 10 ** (totaldigits - 1) + 1;
  // if (sign === 'x') {
  //   fromnumber = 2;
  //   tonumber = 9;
  // } else if (sign === '-' && tonumber > answer) tonumber = answer;
  // // console.log(`${fromnumber},${tonumber}`)
  currentnumber = randomIntFromInterval(fromnumber, tonumber);
  // if (sign === '+' || sign === '-') answer += (sign === '+' ? 1 : -1) * currentnumber;
  // else if (sign === 'x') answer *= currentnumber;
  if (!inwords) question = `${currentnumber}<sup>2</sup>`;
  else if (inwords) {
    const toword = numberToEnglish(currentnumber);
    question = `${toword}<sup>2</sup>`;
  }
  // }
  answer = currentnumber * currentnumber;
  // console.log(`${question} ? ${answer}`);
  return {
    question: question,
    questions: [],
    answers: [],
    answer: answer,
  };
};

const isJsonString = (str) => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};

export const generateWordsQuestion = (questiontype, questions, wordquestionsindexs) => {
  const { type, nos, digits, inwords } = questiontype;
  const wordquestions = questions[type];
  // const questionno = randomIntFromInterval(0, wordquestions.length - 1);
  const questionno = randomFromList(wordquestionsindexs);
  const question = wordquestions[questionno];

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
      let substitute = '';
      console.log('[QuestionGenerator]generatewordsQuestion', param);
      if (param instanceof Object) {
        if ('list' in param) {
          params1.val = randomFromList(param.list);
        } else {
          params1.val = randomIntFromInterval('min' in param ? param.min : fromnumber, 'max' in param ? param.max : tonumber);
        }
        substitute = replaceValues(param.val, params1);
      } else if (param.indexOf('{val}') > -1) {
        params1.val = randomIntFromInterval(fromnumber, tonumber);
        substitute = replaceValues(param, params1);
      }
      const evalstr = evaluate(substitute);
      qparams[key] = roundValue(evalstr);
    });

  const answer = evaluate(replaceValues(question.answer, qparams));
  const questionstr = replaceValues(question.question, qparams);

  return { answer: roundValue(answer), question: questionstr, questions: [], questionno: questionno };
};

const roundValue = (val) => {
  return Math.round(val * 100) / 100;
};

export const generatePlusMinusQuestion = (questiontype) => {
  let currentnumber = 0;
  let question = '';
  const questions = [];
  const answers = [];
  let answer = 0;
  const { type, nos, digits, inwords, level } = questiontype;
  let { decimals = 0 } = questiontype;
  if (inwords) decimals = 0;
  const symbols = [];

  const totaldigits = digits + decimals;
  let isHigherNumber = false;
  let prevnumber = -999;
  for (let i = 0; i < nos; i += 1) {
    console.log(`Number generating i: ,${i}`);
    const temptype = type;
    let sign = '+';
    if (i === 0 || answer < 10 ** (totaldigits - 1)) sign = '+';
    else if ((answer >= 100 || answer <= 10) && type === '+-x' && digits > 1) sign = randomSign('+-');
    else if (answer > 10 && type === '+-x' && digits === 1) sign = randomSign('+-');
    else if (i > 1 && type === '+-x' && !symbols.includes('x') && answer > 9 && answer < 100 && digits > 1) sign = 'x';
    else if (i > 1 && type === '+-x' && !symbols.includes('x') && answer < 10 && digits === 1) sign = 'x';
    else sign = randomSign(temptype);
    // const sign = i === 0 || answer < 10 ** (totaldigits - 1) ? '+' : randomSign(temptype);
    if (!isHigherNumber && level === 2 && i === nos - 1) sign = '+';
    symbols.push(sign);

    let tonumber = 10 ** totaldigits - 1;
    let fromnumber = 10 ** (totaldigits - 1) + 1;
    if (sign === 'x') {
      fromnumber = 2;
      tonumber = 9;
    } else if (sign === '-' && tonumber > answer) tonumber = answer;
    // console.log(`${fromnumber},${tonumber}`)

    if (!isHigherNumber && level === 2 && i === nos - 1) {
      fromnumber = 10 ** digits - answer;
      currentnumber = randomIntFromInterval(fromnumber, fromnumber + 10 ** digits);
    } else currentnumber = randomIntFromInterval(fromnumber, tonumber);

    // console.log(`current no and prev number: ${currentnumber},${prevnumber}`);
    if (currentnumber === prevnumber) {
      i -= 1;
      // console.log(`*** Skipping number and resetting count i ,${i}`);
    } else {
      prevnumber = currentnumber;

      let q = '';
      if (sign === '+' || sign === '-') answer += (sign === '+' ? 1 : -1) * currentnumber;
      else if (sign === 'x') answer *= currentnumber;

      if (!isHigherNumber && level === 2 && answer.toString().length > digits) isHigherNumber = true;

      if (!inwords) {
        q = `${i > 0 ? sign : ''} ${currentnumber / (decimals === 0 ? 1 : 10 ** decimals)}`;
        question = `${question} ${q}`;
        questions.push(q.replace('+', ''));
      } else if (inwords) {
        const toword = numberToEnglish(currentnumber);
        q = `${i <= 0 ? '' : sign === '+' ? ' <u><i>plus</i></u> ' : sign === '-' ? ' <u><i>minus</i></u> ' : ' <u><i>times</i></u> '}${toword}`;
        question = `${question}${q}`;
        questions.push(q.replace('+', ''));
      }
      answers.push(answer);
    }
  }
  answer /= decimals === 0 ? 1 : 10 ** decimals;
  // console.log(`${question} ? ${answer}`);

  questions.push('?');
  // console.log('[Question Generator]', questions);
  return {
    question: question,
    questions: questions,
    answer: answer,
    answers: answers,
  };
};
export const generateTimeArthematicQuestion = (questiontype) => {
  // let currentnumber = 0;
  // let question = '';
  const questions = [];
  // let answer = 0;
  const { type, nos, digits, HR24, level, inwords } = questiontype;
  const symbols = [];

  const hrs = HR24 === 'Y' ? randomIntFromInterval(0, 23) : randomIntFromInterval(1, 12);
  let min = 0;
  if (level === 1) min = randomFromList(['0', '15', '30', '45']);
  else if (level === 2) min = randomFromList(['0', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55']);
  else if (level === 3) min = randomFromList(['0', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55']);
  else if (level === 4) min = randomIntFromInterval(0, 59);
  const timeval = timeformat(hrs, min);
  const sign = randomSign('+-');
  let addmin = '';
  let addhrs = '';
  if (level === 1) addmin = randomFromList(['15', '30', '45']);
  else if (level === 2 || level === 3) addmin = randomFromList(['10', '15', '20', '25', '30', '35', '40', '45', '50', '55']);
  else if (level === 4) addmin = randomIntFromInterval(1, 59);

  if (level > 2) addhrs = randomIntFromInterval(1, 10);

  // eslint-disable-next-line new-cap
  const dt1 = moment(timeval, HR24 === 'Y' ? 'HH:mm' : 'hh:mm');
  // eslint-disable-next-line new-cap
  const dt2 = moment(timeval, HR24 === 'Y' ? 'HH:mm' : 'hh:mm').subtract({ hours: addhrs, minutes: addmin });

  let questionstr = `How many minutes from ${dt2.format(HR24 === 'Y' ? 'HH:mm' : 'hh:mm')} and  ${timeval}?`;
  // console.log(questionstr);

  if (inwords) {
    const toword1 = TimeInWords(dt1, HR24);
    const toword2 = TimeInWords(dt2, HR24);
    questionstr = `How many minutes from <u><i>${toword2}</u></i> and  <u><i>${toword1}</u></i>?`;
    // console.log(questionstr);
  }
  const answer = `${addhrs}:${addmin}`;
  // console.log('[GenerateTimeQuestion]', sign, answerdt.format('hh:mm'));
  // console.log('[Question Generator]', questions);
  return {
    question: questionstr,
    questions: '',
    answers: '',
    answer: answer,
  };
};

const TimeInWords = (time, isHR24) => {
  let toword = '';
  const hrFormat = isHR24 === 'Y' ? 'HH' : 'hh';
  // console.log('QuoteGenerator]TimeInWords', time, isHR24);

  if (+time.format('mm') === 0) toword = `${numberToEnglish(+time.format(hrFormat))} o'clock`;
  else if (+time.format('mm') === 30) toword = `Half Past ${numberToEnglish(+time.format(hrFormat))}`;
  else if (+time.format('mm') < 30) toword = `${numberToEnglish(time.format('mm'))} min past ${numberToEnglish(+time.format('HH'))}`;
  else if (+time.format('mm') > 30) {
    let tohrstr = 1 + +time.format(hrFormat);
    tohrstr = isHR24 === 'Y' && tohrstr === 24 ? '0' : tohrstr;
    tohrstr = isHR24 !== 'Y' && tohrstr === 13 ? '1' : tohrstr;
    toword = `${numberToEnglish(60 - time.format('mm'))} min to ${numberToEnglish(tohrstr)}`;
  }

  return toword;
};

export const generateTimeHrsArthematicQuestion = (questiontype) => {
  // let currentnumber = 0;
  // let question = '';
  const questions = [];
  // let answer = 0;
  const { type, nos, digits, HR24, level, inwords } = questiontype;
  const symbols = [];

  const hrs = HR24 === 'Y' ? randomIntFromInterval(0, 23) : randomIntFromInterval(1, 12);
  let min = 0;
  if (level === 1) min = randomFromList(['0', '15', '30', '45']);
  else if (level === 2) min = randomFromList(['0', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55']);
  else if (level === 3) min = randomFromList(['0', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55']);
  else if (level === 4) min = randomIntFromInterval(0, 59);
  const timeval = timeformat(hrs, min);
  const sign = randomSign('+-');
  let addmin = '';
  let addhrs = '';
  if (level === 1) addmin = randomFromList(['15', '30', '45']);
  else if (level === 2 || level === 3) addmin = randomFromList(['10', '15', '20', '25', '30', '35', '40', '45', '50', '55']);
  else if (level === 4) addmin = randomIntFromInterval(1, 59);

  if (level > 2) addhrs = randomIntFromInterval(1, 10);

  // eslint-disable-next-line new-cap
  let answerdt = new moment(timeval, HR24 === 'Y' ? 'HH:mm' : 'hh:mm');
  let questionstr = `${timeval} ${sign} ${addhrs} ${addhrs ? 'hrs' : ''} ${addmin} min`;
  // console.log(questionstr);

  if (inwords) {
    const toword = TimeInWords(answerdt, HR24);
    questionstr = `${toword} ${sign === '+' ? ' <u><i>plus</i></u> ' : ' <u><i>minus</i></u> '} ${numberToEnglish(addhrs)} ${addhrs ? 'hrs' : ''} ${numberToEnglish(addmin)} mins`;
    // console.log(questionstr);
  }

  if (sign === '+') answerdt = answerdt.add({ hours: addhrs, minutes: addmin });
  else if (sign === '-') answerdt = answerdt.subtract({ hours: addhrs, minutes: addmin });

  // console.log('[GenerateTimeQuestion]', sign, answerdt.format('hh:mm'));
  const answer = '';
  // console.log('[Question Generator]', questions);
  return {
    question: questionstr,
    questions: '',
    answers: '',
    answer: answerdt.format(HR24 === 'Y' ? 'HH:mm' : 'hh:mm'),
  };
};

const timeformat = (hrs, min) => {
  return `${hrs < 10 ? '0' : ''}${hrs}:${min < 10 ? '0' : ''}${min}`;
};

export const randomIntFromInterval = (min, max, exceptList = []) => {
  // min and max included
  // if (decimals === 0)
  let val;

  do {
    val = Math.floor(Math.random() * (max - min + 1) + min);
  } while (exceptList.indexOf(val) > -1);
  return val;

  // else {
  //     const decimalnumber = (10 ** decimals);
  //     console.log(`${(max * decimalnumber)},${(min * decimalnumber) + 1}`)
  //     return Math.floor(Math.random() * ((max * decimalnumber) - (min * decimalnumber) + 1) + (min * decimalnumber)) / decimalnumber;
  // }
};

export const randomFromList = (list) => {
  // retuns a number from list
  return list[Math.floor(Math.random() * list.length)];
};

// const randomSign = () => {
//   return Math.round(Math.random()) * 2 - 1;
// };

export const getDisplaySuccessMessage = () => {
  const successMessages = [
    'Tremendous',
    'Remarkable',
    'Great',
    'Terrific',
    'Enormous',
    'Impressive',
    'Outstanding',
    'Phenomenal',
    'Marvellous',
    'Wonderful',
    'Sensational',
    'Magnificent',
    'Superb',
    'Excellent',
    'Very good',
    'First-class',
    'Fabulous',
    'Super',
    'Awesome',
    'Brilliant',
    'Keep going',
  ];
  return randomFromList(successMessages);
};

export const getDisplayWrongMessage = () => {
  const successMessages = ['Concentrate', 'Focus', 'Think hard', 'Give attention', 'Be attentive'];
  return randomFromList(successMessages);
};

export const getDisplayRetryMessage = () => {
  const successMessages = ['Try Again', 'Retry', 'Re-attempt', 'Re-Think'];
  return randomFromList(successMessages);
};

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
    // console.log('[Utils.replaceValue]', all);
    return valueHash[all.replace('{', '').replace('}', '')]; // || all;
  });
  return base;
};

const gcd = (a, b) => {
  return b ? gcd(b, a % b) : a;
};

const decimalToFraction = (_decimal) => {
  if (_decimal === parseInt(_decimal, 10)) {
    return {
      top: parseInt(_decimal, 10),
      bottom: 1,
      display: `${parseInt(_decimal, 10)}/${1}`,
    };
  } else {
    let top = _decimal.toString().includes('.') ? _decimal.toString().replace(/\d+[.]/, '') : 0;
    const bottom = 10 ** top.toString().replace('-', '').length;
    if (_decimal >= 1) {
      top = +top + Math.floor(_decimal) * bottom;
    } else if (_decimal <= -1) {
      top = +top + Math.ceil(_decimal) * bottom;
    }

    const x = Math.abs(gcd(top, bottom));
    return {
      top: top / x,
      bottom: bottom / x,
      display: `${top / x}/${bottom / x}`,
    };
  }
};
