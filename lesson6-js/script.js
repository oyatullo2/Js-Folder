let a = Number(prompt("Son kiriting: "));
let b = 0;

while (a > 0) {
  b += a;
  a = Number(prompt('Yana bir son kiriting: '))
}

console.log("Yig'indi: " + b);
