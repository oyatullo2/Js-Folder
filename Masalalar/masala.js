document.getElementById('result').addEventListener('click' , function main(){
    let num=document.getElementById('radius').value;
    let number=Number(num);
    let max=this.ariaValueMax(number)
    let p=3.14;

    let yuz=2*p*(number/2);
    let r=yuz/2;

    
    let q=Math.pow(r,2);
    let yuz1=p*q;
    document.getElementById('text').innerHTML=`Radiusi : ${yuz}cm`;
    document.getElementById('text1').innerHTML=`Yuzasi : ${yuz1}cm`;
})