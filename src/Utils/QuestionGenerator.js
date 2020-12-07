export const generateQuestion = (questiontype) => {
  let currentnumber = 0;
  let question = '';
  let answer = 0;
  const { type, nos, digits, inwords } = questiontype;
  let { decimals = 0 } = questiontype;
  if (inwords) decimals = 0;

  const totaldigits = digits + decimals;
  for (let i = 0; i < nos; i += 1) {
    const sign = i === 0 || answer < 10 ** (totaldigits - 1) ? 1 : randomSign();

    let tonumber = 10 ** totaldigits - 1;
    const fromnumber = 10 ** (totaldigits - 1) + 1;
    if (sign < 0 && tonumber > answer) tonumber = answer;
    // console.log(`${fromnumber},${tonumber}`)
    currentnumber = randomIntFromInterval(fromnumber, tonumber, decimals);
    answer += sign * currentnumber;
    if (!inwords) question = `${question}${currentnumber > 0 && sign > 0 ? (i > 0 ? ' + ' : '') : ' - '}${currentnumber / (decimals === 0 ? 1 : 10 ** decimals)}`;
    else if (inwords) {
      const toword = numberToEnglish(currentnumber);
      question = `${question}${currentnumber > 0 && sign > 0 ? (i > 0 ? ' plus ' : '') : ' minus '}${toword}`;
    }
  }
  answer /= decimals === 0 ? 1 : 10 ** decimals;
  console.log(`${question} ? ${answer}`);
  return {
    question: question,
    answer: answer,
  };
};

const randomIntFromInterval = (min, max, decimals) => {
  // min and max included
  // if (decimals === 0)
  return Math.floor(Math.random() * (max - min + 1) + min);
  // else {
  //     const decimalnumber = (10 ** decimals);
  //     console.log(`${(max * decimalnumber)},${(min * decimalnumber) + 1}`)
  //     return Math.floor(Math.random() * ((max * decimalnumber) - (min * decimalnumber) + 1) + (min * decimalnumber)) / decimalnumber;
  // }
};

const randomSign = () => {
  return Math.round(Math.random()) * 2 - 1;
};

const shouldPrefixWithOne = (n) => {
  return n >= 100;
};

/**
 * Checks if a certain number should be joined with hyphens
 * e.g. "ninety-nine" versus "one hundred one"
 *
 * Examples:
 * _shouldHyphenate(10); // returns False
 * _shouldHyphenate(21); // returns True
 *
 * @param {number} n placeholder to check
 * @returns {boolean}
 */
const shouldHyphenate = (n) => {
  return n >= 20 && n <= 99;
};

const numbers = [
  { number: 1000000000000, text: 'trillion' },
  { number: 1000000000, text: 'billion' },
  { number: 1000000, text: 'million' },
  { number: 1000, text: 'thousand' },
  { number: 100, text: 'hundred' },
  { number: 90, text: 'ninety' },
  { number: 80, text: 'eighty' },
  { number: 70, text: 'seventy' },
  { number: 60, text: 'sixty' },
  { number: 50, text: 'fifty' },
  { number: 40, text: 'forty' },
  { number: 30, text: 'thirty' },
  { number: 20, text: 'twenty' },
  { number: 19, text: 'nineteen' },
  { number: 18, text: 'eighteen' },
  { number: 17, text: 'seventeen' },
  { number: 16, text: 'sixteen' },
  { number: 15, text: 'fifteen' },
  { number: 14, text: 'fourteen' },
  { number: 13, text: 'thirteen' },
  { number: 12, text: 'twelve' },
  { number: 11, text: 'eleven' },
  { number: 10, text: 'ten' },
  { number: 9, text: 'nine' },
  { number: 8, text: 'eight' },
  { number: 7, text: 'seven' },
  { number: 6, text: 'six' },
  { number: 5, text: 'five' },
  { number: 4, text: 'four' },
  { number: 3, text: 'three' },
  { number: 2, text: 'two' },
  { number: 1, text: 'one' },
  { number: 0, text: 'zero' },
];

const andWord = 'and';

const numberToEnglish = (val, options = {}) => {
  const andForBritish = options.ands || false;

  const comma = options.commas ? ',' : '';
  const and = andForBritish ? `${andWord} ` : '';
  let words = '';
  let prefixNum;
  let remainder;
  let closestSmallerNumber;
  let closestSmallerNumberText;

  let numToConvert = parseInt(val, 10);

  if (isNaN(numToConvert)) {
    return 'not a number';
  }

  if (!isFinite(numToConvert)) {
    return 'infinity';
  }

  if (numToConvert < 0) {
    words += 'negative ';
    numToConvert *= -1;
  }

  // Search list of numbers for closest smaller number.
  // numToConvert will be written in terms of this number.
  for (const { number, text } of numbers) {
    if (numToConvert === number) {
      if (shouldPrefixWithOne(number)) {
        words += 'one ';
      }
      words += text;
      return words;
    }

    if (numToConvert > number) {
      closestSmallerNumber = number;
      closestSmallerNumberText = text;
      break;
    }
  }

  // How many 'closestSmallerNumber's can numToConvert be grouped into?
  // e.g. five 'thousand'.
  prefixNum = Math.floor(numToConvert / closestSmallerNumber);
  if (prefixNum !== 1 || shouldPrefixWithOne(closestSmallerNumber)) {
    words += `${numberToEnglish(prefixNum, options)} `;
  }

  words += closestSmallerNumberText;

  remainder = numToConvert - prefixNum * closestSmallerNumber;
  if (remainder > 0 && shouldHyphenate(closestSmallerNumber)) {
    words += '-';
  } else if (closestSmallerNumber >= 1000 && remainder > 0 && remainder < 100) {
    words += `${comma} ${and}`;
  } else if (closestSmallerNumber >= 1000 && remainder > 0) {
    words += `${comma} `;
  } else if (closestSmallerNumber === 100 && remainder > 0) {
    words += ` ${and}`;
  } else {
    words += ' ';
  }

  if (remainder > 0) {
    words += numberToEnglish(remainder, options);
  }

  return words.trim();
};
