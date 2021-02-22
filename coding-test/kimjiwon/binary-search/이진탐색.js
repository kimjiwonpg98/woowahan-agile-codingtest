const line = require("fs").readFileSync("/dev/stdin", "utf8");
let input = line.trim().split("\n");

const count = +input[0];
const target = +input[1];
const array = input[2].split(" ").map(Number);
array.sort((a, b) => a - b);

<<<<<<< HEAD
const BinSearch = (target, array, start, end) => {
=======
const binSearch = (target, array, start, end) => {
>>>>>>> 9fb7475ccc4fd9a46192cc5b645d0138282999a3
  const mid = parseInt((end + start) / 2);
  if (array[mid] === target) return console.log(mid + 1);
  if (mid < -1 || start >= end) return console.log("숫자 없음");
  array[mid] < target
<<<<<<< HEAD
    ? BinSearch(target, array, mid, end)
    : BinSearch(target, array, start, mid);
};

BinSearch(target, array, 0, count - 1);
=======
    ? binSearch(target, array, mid, end)
    : binSearch(target, array, start, mid);
};

binSearch(target, array, 0, count - 1);
>>>>>>> 9fb7475ccc4fd9a46192cc5b645d0138282999a3
