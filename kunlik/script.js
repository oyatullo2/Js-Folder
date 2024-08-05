document.getElementById('multiplyButton').addEventListener('click' , function main (){
    var num=document.getElementById('kun').value;
    var num1=Number(num);
    
    var result1=num1*10000;

    document.getElementById('result').innerHTML=`Natija : `+result1;

})