function checkProbabilityTheory(count) {

    if (count <= 0) {
        console.log("Кількість згенерованих чисел повинна бути додатньою.");
        return;
    }

    let evenCount = 0;
    let oddCount = 0;

    for (let i = 0; i < count; i++) {

        const randomNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;

        if (randomNumber % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    const evenPercentage = (evenCount / count) * 100;
    const oddPercentage = (oddCount / count) * 100;

    console.log(`Кількість згенерованих чисел: ${count}`);
    console.log(`Парних чисел: ${evenCount}`);
    console.log(`Непарних чисел: ${oddCount}`);
    console.log(`Відсоток парних чисел: ${evenPercentage.toFixed(2)}%`);
    console.log(`Відсоток непарних чисел: ${oddPercentage.toFixed(2)}%`);
}

checkProbabilityTheory(1000);
