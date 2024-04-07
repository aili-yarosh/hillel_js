
function pow(x, y) {
    let new_num = 1;
    for (let i = 0; i < y; i++) {
        new_num *= x;
    }
    return new_num;
};


var prompt = require('prompt');

prompt.start();
console.log("введіть число та степінь")

prompt.get(['x', 'y'], function (err, result) {

    var x = Number(result.x)
    var y = Number(result.y)
    var new_num = pow(x, y);
    console.log(new_num);
});