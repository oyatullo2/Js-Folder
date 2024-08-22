// document.getElementById('result').addEventListener('click',function main(){
//     // let a=document.getElementById('text').value;
//     let b=document.getElementById('number').value;
//     let num=Number(b);
    
//     let results=0;
//     for(let i=0;i<=num;i++){
//         let natija=results+b+'<br>';
//         document.getElementById('text1').innerHTML=natija;
//     }
// })

// let a=+prompt('Son kiriting : ');
// let son=0;
// for(let i=0;i<a;i++){
//     son=son+i;
//     console.log(son);
// }
// console.log(son);


// let a=+prompt('son kiriting : ');

// for(let i=10;i>=a;i--){
//     console.log(i);
// }

// let a=+prompt('Son kiriting : ');
// let son=1;
// for(let i=1;i<=a;i++){
// son=son*i;
// }
// console.log(son);

// let a = +prompt("Son kiriting: ");
// let sum = 0;

// for (let i = 1; i < a; i++) {
//     let son = Math.pow(i, 2);
//     console.log(son);
//     sum = sum + son;
// }

// console.log("Natija: " + sum);

let a=+prompt('Son kiriting : ');
let son1=1;
let sum=1;

for(let i=1;i<=a;i++){
    let son=Math.pow(i,2);
    console.log(son);
    sum=son*sum;
}
console.log("Natija : "+sum);
