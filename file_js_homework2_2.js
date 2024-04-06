var prompt = require('prompt');

prompt.start();
console.log("введіть ціле число та одиницю вимірювання (kg / km / hour )")

prompt.get(['size', 'value_name'], function (err, result) {
    var size = Number(result.size)
    var value_name = String(result.value_name)

    if (err) {
        console.error('Помилка: ', err);
        return;
    }

    if (!/^\d+$/.test(result.size) && (!/^[a-zA-Z]+$/.test(result.value_name))) {
        console.error('Помилка: size повинен бути цілим числом а value_name повинен містити тільки букви.');
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

    console.log('  size: ' + result.size);
    console.log('  value_name: ' + result.value_name);
    console.log(result.size, result.value_name)

    switch (value_name) {
        case "km":
            console.log(result.size + result.value_name + " it is " + (result.size * 1000), " meters");
            break;
        case "hour":
            console.log(result.size + result.value_name + " it is " + (result.size * 60), " minutes");
            break;
        case "kg":

            console.log(result.size + result.value_name + " it is " + (result.size * 1000), " gram");
            break;
        default:
            console.log(result.value_name + " Невідома одиниця вимірювання.");
    }
});
