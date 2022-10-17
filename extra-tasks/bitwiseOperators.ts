// 0b1010
//

function dec2bin(dec: number) {
  return (dec >>> 0).toString(2);
}

// 10101010
//  1010010
// -------- &
// 00000010

// 10101010
//  1010010
// -------- |
// 11111010

// 10101010
//  1010010
// -------- ^
// 11111000

// 1010000 << 4
// 101 >> 2 // 1

const mouseX = 156;
const mouseY = 123;

console.log(dec2bin(mouseX));
console.log(dec2bin(mouseY));

const mouseXBits = mouseX & 0b1111;
const mouseYBits = mouseY & 0b1111;
const concatBits = (mouseXBits << 4) | mouseYBits;
const finalNumber = (Date.now() & 0b11111111) ^ concatBits;

// 1100
// 1011
// 11001011

console.log(dec2bin(finalNumber));

// Unix epoch
// Amount of milliseconds since 1.1.1970
// Can be gotten by calling Date.now()
