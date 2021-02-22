const line = require("fs").readFileSync("/dev/stdin", "utf8");
let input = line.trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const riceCake = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);
let start = 0;
let end = riceCake[0];
let result = 0;

while (start <= end) {
<<<<<<< HEAD
  let mid = parseInt((start + end) / 2);
  let client = riceCake
    .map((x) => x - mid)
    .filter((num) => num > 0)
    .reduce((acc, x) => acc + x);
=======
  const mid = parseInt((start + end) / 2);
  const client = riceCake
    .reduce((acc, x) => {
        if (x > mid) acc + x;
        return acc;
    }, 0);
>>>>>>> 9fb7475ccc4fd9a46192cc5b645d0138282999a3
  client < M ? (end = mid - 1) : ((start = mid + 1), (result = mid));
}
console.log(result);
