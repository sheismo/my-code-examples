// Build a Timer

console.time("timer");
let firstValue = 10;
let secondValue = [0, 1, 2, 3, 4];

for (let i = 0; i < secondValue.length; i++){
    let newValue = firstValue + secondValue[i]
    console.log(newValue)
}

console.timeEnd("timer");