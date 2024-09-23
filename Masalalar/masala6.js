let text1=document.querySelector("#text")
let text2=document.querySelector("#text1")
let text3=document.querySelector("#text2")

let result1=0;
let result2=0;

document.querySelector("#num").addEventListener('input',function(a){
    let num1=a.target;
    result1=Number(num1.value);
    text1.innerHTML="Number one : "+result1;
    main();
})

document.querySelector("#num1").addEventListener('input',function(b){
    let num2=b.target;
    result2=Number(num2.value);
    text2.innerHTML="Number two : "+result2;
    main();
})

function main(){
    if(result1!=0 && result2!=0){
    if(result2!=0 && result1%result2===0){
        text3.innerHTML=`Yes !<br>Number one : ${result1}<br>Number two : ${result2} <br>Qoldiq : `+(result1%result2);
    }
    else if(result1%result2!=0){
        text3.innerHTML=`No !<br>Natija :`+parseInt(result1/result2)+ ` butun `+(result1%result2)+` qoldiq !`;
    }
}
else{
    text3.innerHTML="Maydolar to'ldirilmagan !"
}
}