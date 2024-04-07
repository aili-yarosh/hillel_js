
let line = '';

for (let i = 1; i < 6; i++) {
    line = line + "*";
    console.log(line);
};

for (let i = 0; i < 6; i++) {
    let line = '';

    for (let y = 0; y < i; y++)
        line += '*';

    console.log(line);
};
