document.querySelector("#choy-puli").addEventListener('input',function (a){
    let son=a.target;
    let result=Number(son.value);
    let text=document.querySelector("#text");

        if(son.value.length===0){
        text.innerHTML="Maydon bo'sh !";
        son.style.borderColor='blue'
        son.style.color='blue';
        text.style.color='blue'
        return;
    }

    if(result<50000){
        son.style.borderColor='red';
        son.style.color='red';
        text.style.color='red';
        text.style.fontFamily='monospace'
        text.innerHTML=`Siz kiritgan summa : `+son.value+"so'm !<br>"+`Sizga yana : ${50000-son.value} so'm yetmayapdi !`;
    }
    else if(result>=50000){
        son.style.borderColor='green';
        son.style.color='green';
        text.style.color='green'
        text.innerHTML=son.value;
        if(son.value-50000!=0){
            text.innerHTML=`Siz kiritgan summa : `+son.value+"so'm !<br>"+`Sizga yana : ${son.value-50000} so'm ortiqcha kiritdingiz !`;
        }
        else{
            text.innerHTML=`Siz kiritgan summa : `+son.value+"so'm !<br>";
        }
    }
})