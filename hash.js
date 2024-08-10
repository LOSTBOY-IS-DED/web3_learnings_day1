const crypto = require("crypto");

const input = "Hazel";
const hash = crypto.createHash(`sha256`).update(input).digest(`hex`);

console.log(hash);
console.log(hash.length);

// createHash --> returns an object on which we are calling an object this returns an object and calling digest which is encoding ... as the name suggest sha-256 returns a 256 bit integer

// how many possibilities ??
// --> 2^256

//getting the same output on
// https://emn178.github.io/online-tools/sha256.html
