// document.getElementById('result').addEventListener('click' , function main(){
//     let a=document.getElementById('kun').value;
//     let b=document.getElementById('daraja').value;

//     let num1=Number(a);
//     let num2=Number(b);


//     let result=Math.pow(num1,num2);

//     document.getElementById('text').innerHTML=`Natija : ${result}`;
// })

// let a=+prompt("son kiriting : ");
// let son=1;
// for(let i=1;i<a;i++){
//     son*=i;
// }
let q = setTimeout(function() {
    let w = document.getElementById('text');
    let son = Number(w.textContent || w.innerText); // Elementning matn qiymatini olish
    if (son) {
        w.style.overflow = 'hidden'; // To'g'ri qiymat
        w.style.transform = 'translateY(0)'; // To'g'ri xususiyat
    }
}, 1000);
