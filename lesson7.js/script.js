// let a=+prompt("Son kiriting : ");
// let son=0;
// let b=0;
// let z=a;
// while(a>0){
//     b=a%10;
//     son=son*10+b;
//     a=parseInt(a/10);
// }
// if(z==son){
//     console.log("Palidrom son",son)
// }
// else{
//     console.log("Palidrom son emas",son)
// }


// let array=["Oyatullo","..1","..2","..3"]
// array.pop();
// array.push("Oyatullo");
// array.shift();
// array.unshift("Yana ozim")

// for(let i of array){
//     console.log(i);
// }


// let array=[5,5,5,5];
// let result=0;

// for (let i of array) {
//     result+=i;
    
// }
// console.log(result);

let array=[2,3,4,5,6,7,8];
let juft=0;
let toq=0;
for(let i=0;i<array.length;i++){
    if(i%2==0){
        juft++;
    }else{
        toq++;
    }
}
console.log(`juft ${juft} ta toq ${toq} ta bor`);