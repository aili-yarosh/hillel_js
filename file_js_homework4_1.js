function pad(str, char, count, padStart) {

    if (count <= 0) {
        return str;
    }

    const padLength = Math.max(0, count - str.length);

    const padStr = char.repeat(padLength);

    return padStart ? padStr + str : str + padStr;
}

console.log(pad('qwerty', '+', 10, true));
console.log(pad('qwerty', '+', 10, false));
console.log(pad('qwerty', '+', 6, true));
console.log(pad('qwerty', '+', 6, false));
console.log(pad('qwerty', '+', 3, true));
console.log(pad('qwerty', '+', 3, false));