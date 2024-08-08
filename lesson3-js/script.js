// document.getElementById('result').addEventListener('click' , function main(){
//     let num1=document.getElementById('num1').value;
//     let num2=document.getElementById('num2').value;
//     let num3=document.getElementById('num3').value;

//     let number1=Number(num1);
//     let number2=Number(num2);
//     let number3=Number(num3);

//     let sovganarxi=50;

//     let result1=number1+number2+number3;

//     if(result1>sovganarxi){
//         document.getElementById('text').innerHTML="Natija : Yes";
//     }
//     else if(result1<sovganarxi){
//         document.getElementById('text').innerHTML="Natija : No";
//     }
// })

// let a=prompt("Nechta uycha yasamoqchisiz !");
// let natija=a*6;

// if(a==1){
//     document.getElementById('text').innerHTML="Natija : 6";
// }
// else if(a>2){
//     document.getElementById('text').innerHTML="Natija : "
// }


// document.getElementById('result').addEventListener('click' , function main(){
//     let num1=document.getElementById('num1').value;
//     let num2=document.getElementById('num2').value;
//     let num3=document.getElementById('num3').value;
//     let num4=document.getElementById('num4').value;

//     let number1=Number(num1);
//     let number2=Number(num2);
//     let number3=Number(num3);
//     let number4=Number(num4);

//     let qoldiqlar1=number1%number4;
//     let qoldiqlar2=number3%number2;
//     let natija=qoldiqlar1+qoldiqlar2;

//     document.getElementById('text').innerHTML="Natija : "+natija;
// })

// document.getElementById('result').addEventListener('click',function main(){
//     let a=document.getElementById('num1').value;
//     let num1=Number(a);

//     let foiz12=a/100;
//     let foiz13=foiz12*12;
//     let foiz14=foiz13+num1;


//     let foiz15=a/100;
//     let foiz16=foiz12*15;
//     let foiz17=foiz16+num1;


//     let foiz18=a/100;
//     let foiz19=foiz12*20;
//     let foiz20=foiz19+num1;

//     if(301>num1){
//         document.getElementById('text').innerHTML="Natija : "+foiz14;
//     }
//     else if(300<num1 & 501>num1){
//         document.getElementById('text').innerHTML="Natija : "+foiz17;
//     }
//     else if(num1>500){
//         document.getElementById('text').innerHTML="Natija : "+foiz20;
//     }
// })

document.getElementById('result').addEventListener('click',function main(){
    let num1=document.getElementById('num1').value;
    let num=Number(num1);

    let natija=(num*5)+1;

    document.getElementById('text').innerHTML=`Sizga ${natija} ta cho'p kerak bo'ladi !`;
})