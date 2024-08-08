document.getElementById('result').addEventListener('click',function main(){
    let num1=document.getElementById('num1').value;
    let num2=document.getElementById('num2').value;

    let number1=Number(num1);
    let number2=Number(num2);

    let n=number1-number2;
    let n1=number2-number1;

    let result=number1>number2 ? number1=10:number2=5;
    // if(n>n1){
    //     document.getElementById('text').innerHTML=`${number1} ${number2} dan katta`;
    // }
    // else if(n1>n){
    //     document.getElementById('text').innerHTML=`${number2} ${number1} dan katta`;
    // }
    if(number1!==number2){
        document.getElementById('text').innerHTML="Natija : "+result;
    }
    else if(number1===number2){
        document.getElementById('text').innerHTML=`Natija : 0<br>Siz kiritgan birinchi son ${num1}, Ikkinchi son ham ${num2}`;
    }
})