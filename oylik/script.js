document.getElementById('multiplyButton').addEventListener('click' , function main(){
let num=document.getElementById('number').value;
let num1=Number(num);

let natija=num1/1000;
let natija2=num1/10000;
let natija1=parseInt(natija2*1.5);

if(num1<5000000){
    document.getElementById('result').innerHTML=`Ishchi oyligi ${num1} so'm !<br>Siz oladigan foiz : ${natija} so'm !`;
}
else{
    document.getElementById('result').innerHTML=`Ishchi oyligi ${num1} so'm !<br>Siz oladigan foiz : ${natija1} so'm !`;
}
})