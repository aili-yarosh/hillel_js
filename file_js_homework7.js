
console.log("вираз який має принаймні шість символів і не містити літери А (великої або малої)");
var regex = /(?!.*[Aa]).{6,}/;

var word1 = ["mnopqr"];
var word2 = ["123456"];
var word3 = ["abcdef"];

console.log(word1 + ' ' + regex.test(word1));
console.log(word2 + ' ' + regex.test(word2));
console.log(word3 + ' ' + regex.test(word3));

console.log('');
console.log("виведе лише email 'gmail.com' та 'yahoo.com' ");

var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru" // Нам такі не підходять
    },
];
const emailRegex = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail\.com|yahoo\.com)$/;

var validEmails = [];

for (var i = 0; i < arr.length; i++) {
    if (emailRegex.test(arr[i].email)) {
        validEmails.push(arr[i].email);
    }
}
console.log(validEmails);