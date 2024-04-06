var prompt = require('prompt');

prompt.start();
console.log("введіть ціле число та одиницю вимірювання (kg / km / hour )")

prompt.get(['size', 'value_name'], function (err, result) {
    if (err) {
        console.error('Помилка: ', err);
        return;
    }

    var is_size_ok = !/^\d+$/.test(result.size);
    var is_name_ok = !/^[a-zA-Z]+$/.test(result.value_name);

    if (is_size_ok && is_name_ok) {
        console.error("Помилка: size повинен бути цілим числом, а value_name повинен містити тільки латинські букви букви  ");
        return;
    } else if (is_size_ok) {
        console.error('Помилка: size повинен бути цілим числом.');
        return;
    } else if (is_name_ok) {
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
