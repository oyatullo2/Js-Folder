let a=setTimeout(function (){
    let b=document.getElementById('text');
    let result=Number(b.textContent);
    if(b){
        b.style.opacity='100';
        b.style.transform='translateX(0)';
        b.style.color='red';
    }
},1500)