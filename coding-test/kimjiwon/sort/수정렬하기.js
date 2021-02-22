const line = require("fs").readFileSync("/dev/stdin", "utf8");
let input = line.trim().split("\n");

const resultArr = [];

for (let i = 1; i < input.length; i++) {
    resultArr.push(+input[i]);
}

<<<<<<< HEAD:coding-test/kimjiwon/sort/수정렬하기.js
<<<<<<< HEAD
resultArr.sort((a, b) => a -b);

console.log(resultArr.join("\n"));
=======
resultArr.sort((a, b) => a - b);

console.log(resultArr.join("\n"));
>>>>>>> 9fb7475ccc4fd9a46192cc5b645d0138282999a3
=======
resultArr.sort((a, b) => a - b);

console.log(resultArr.join("\n"));
>>>>>>> b730fae8bce3ae36ce7b27cb3413425fcd7e1891:programmers-coding-test/kimjiwon/sort/수정렬하기.js
