document.getElementById('result').addEventListener('click',function main(){
    let number=document.getElementById('num').value;
    let num=Number(number);

    if(num>0){
        document.getElementById('minut').innerHTML=`Siz yozgan son ${num}! <br>${num} soniya<br>${num/60} daqiqa<br>${num/3600} soat !`;
    }
    else{
        document.getElementById('minut').innerHTML=`Siz manfiy son yzodingiz !`;
    }
})