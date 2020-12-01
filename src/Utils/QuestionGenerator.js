export const generateQuestion = (questiontype) => {
    let currentnumber = 0;
    let question = '';
    let answer = 0;
    const {nos, digits, decimals = 0}=questiontype;
    const totaldigits = digits + decimals;
    for (let i = 0; i < nos; i += 1) {
        const sign = (i === 0 || answer < 10 ** (totaldigits - 1) ? 1 : randomSign());

        let tonumber = (10 ** totaldigits) - 1;
        const fromnumber = (10 ** (totaldigits - 1)) + 1
        if (sign < 0 && tonumber > answer) tonumber = answer;
        // console.log(`${fromnumber},${tonumber}`)
        currentnumber = randomIntFromInterval(fromnumber, tonumber, decimals);
        answer += (sign * currentnumber);
        question = `${question}${currentnumber > 0 && sign > 0 ? (i > 0 ? ' + ' : '') : ' - '}${currentnumber / (decimals === 0 ? 1 : (10 ** decimals))}`;
    }
    answer /= (decimals === 0 ? 1 : (10 ** decimals));
    console.log(`${question} ? ${answer}`)
    return {
        question: question,
        answer: answer,
    }
}

const randomIntFromInterval = (min, max, decimals) => { // min and max included 
    // if (decimals === 0)
    return Math.floor(Math.random() * (max - min + 1) + min);
    // else {
    //     const decimalnumber = (10 ** decimals);
    //     console.log(`${(max * decimalnumber)},${(min * decimalnumber) + 1}`)
    //     return Math.floor(Math.random() * ((max * decimalnumber) - (min * decimalnumber) + 1) + (min * decimalnumber)) / decimalnumber;
    // }
}

const randomSign = () => {
    return Math.round(Math.random()) * 2 - 1;
}
