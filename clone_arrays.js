// 6 ways to clone Arrays in Javascript

//using slice method
const clone1 = (arr) => arr.slice(0);

//using spread operator
const clone2 = (arr) => [...arr];

//using "from" method
const clone3 = (arr) => Array.from(arr);

//using "map" method
const clone4 = (arr) => arr.map((x) => x);

//using JSON methods(deep cloning)
const clone5 = (arr) => JSON.parse(JSON.stringify(arr));

//using "concat" methods
const clone6 = (arr) => arr.concat([]);
