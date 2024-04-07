var number = 0;

for (let x = 0; x <= 100; x++) {
    if (x % 3 === 0)
        continue;

    number += x;
}

console.log(number);
