document.getElementById('result').addEventListener('click',function main(){
    let num=document.getElementById('num1').value;
    let num1=document.getElementById('num2').value;

    let width=Number(num);
    let height=Number(num1);
    let p=3.14;

    let yuz1=p*width;
    let yuz2=p*height;
    let natija=width>height?width-height:height-width;
    let ayirma=p*natija;

    document.getElementById('text').innerHTML=ayirma;
})