document.getElementById('result').addEventListener('click' , function main(){
    let input=document.getElementById('number').value;
    let text=document.getElementById('texts').value;
    let numbers=Number(input);

    let repeatedText = Array(numbers).fill(text).join('<br>');

    document.getElementById('text').innerHTML=`Siz yozgan so'z : ${text}<br>Va ular ${input} marotaba ko'paytirildi !<br>`+repeatedText;
})