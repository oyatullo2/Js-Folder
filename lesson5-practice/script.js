document.getElementById('result').addEventListener('click',function main(){
    let number1=document.getElementById('number').value;
    let num=Number(number1);

    let son1=0;
    let son2=1;
    for(let i=1;i<=number1;i++){
        son1=son1=+Math.pow(i,2);
    // document.getElementById('natija-text').innerHTML=son1;
        console.log(son1);
        son2+=son1;
    }
    console.log("Natija : "+son2);

})