var prompt = require('prompt');

prompt.start();
console.log("введіть ціле число та одиницю вимірювання (kg / km / hour )")

prompt.get(['size', 'value_name'], function (err, result) {
    if (err) {
        console.error('Помилка: ', err);
        return;
    }
    
    if (!/^\d+$/.test(result.size)) {
        console.error('Помилка: size повинен бути цілим числом.');
        return;
    }
    
    if (!/^[a-zA-Z]+$/.test(result.value_name)) {
        console.error('Помилка: value_name повинен містити тільки латинські букви букви.');
        return;
    }
    
    var value_name = String(result.value_name)
    var size = Number(result.size)
    
    console.log('  size: ' + size);
    console.log('  value_name: ' + value_name);
    console.log(size, value_name)

    switch (value_name) {
        case "km":
            console.log(size + value_name + " it is " + (size * 1000), "meters");
            break;
        case "hour":
            console.log(size + value_name + " it is " + (size * 60), "minutes");
            break;
        case "kg":
            console.log(size + value_name + " it is " + (size * 1000), "gram");
            break;
        default:
            console.log(value_name + " Невідома одиниця вимірювання.");
    }
});
