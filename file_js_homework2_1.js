var prompt = require('prompt');
var age = 0;

  prompt.start();
 
  console.log('скільки вам років?');
  prompt.get(['age'], function (err, result) {
    var age = Number(result.age);

  
    if (age === 1 ){
        console.log('  age: ' + result.age + ' рік')
    // } else if (age > 1 && age < 5 ) {
    //     console.log('  age: ' + result.age + ' роки')
    } else if (age % 10 === 4 || age % 10 === 3 || age % 10 === 2){
        console.log('  age: ' + result.age + ' роки')
    } else {
        console.log('вам', + result.age + ' років')
    }
 }); 
