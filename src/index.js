const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    // write your solution here
    let list = [];
    let str = '',
        str1 = '',
        str2 = '';
    for (let i = 0; i < expr.length; i += 10) {
        str = (expr.slice(i, i + 10));
        if (str.includes('*')) {
            list.push(' ');
        } else {
            for (let j = 0; j < str.length; j += 2) {
                if (str.slice(j, j + 2) === '10') {
                    str2 += '.';
                } else if (str.slice(j, j + 2) === '11') {
                    str2 += '-';
                }
            }
        }
        list.push(MORSE_TABLE[str2]);
        str2 = '';
    }
    return list.join('');
}

module.exports = {
    decode
}