const rl = require("readline-sync");

const H = parseInt(rl.question("몇시까지 :\n>> "));

let count = 0;

for (let h = 0; h < H + 1; h++) {
    for (let m = 0; m < 60; m ++) {
        for (let s = 0; s < 60; s++) {
            let times = `${h} ${m} ${s}`
<<<<<<< HEAD
            if (times.match(/[3]/g)) {
=======
            if (times.includes(“3”)) {
>>>>>>> master
                count++;
            }
        }
    }
}

<<<<<<< HEAD
console.log(count);
=======
console.log(count);
>>>>>>> master
