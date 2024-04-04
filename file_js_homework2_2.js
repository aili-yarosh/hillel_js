var prompt = require('prompt');
//var size = 0;
//var value_name = "0";
prompt.start();

  prompt.get(['size', 'value_name'], function (err, result) {

    var size = Number(result.size)
    var value_name = String(result.value_name)
    if (err) {
        console.error('Помилка: ', err);
        return; 
    }
    console.log('  size: ' + result.size);
    console.log('  value_name: ' + result.value_name);
    console.log(result.size, result.value_name)
  });
