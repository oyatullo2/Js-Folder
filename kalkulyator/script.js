document.addEventListener('keydown', function(event) {
    // Agar 'Enter' tugmasi bosilsa
    if (event.key === 'Enter') {
        // 'result' tugmachasiga click hodisasini qo'lda chaqirish
        document.getElementById('result').click();
    }
});

document.getElementById('result').addEventListener('click', function main() {
    let a = document.getElementById('num1').value;
    let b = document.getElementById('num2').value;
    let c = document.getElementById('belgi').value;
    
    let num1 = Number(a);
    let num2 = Number(b);

    if(num1.toString().length<5 && num2.toString().length<5){
    if (!isNaN(c)) {
        document.getElementById('text').innerHTML=`Siz amallar kiritish maydoniga son kiritgansiz !`;
    }
    else if (c == "+") {
        document.getElementById('text').innerHTML = `${num1} + ${num2} = ` + (num1 + num2);
    }
    else if (c == "-") {
        document.getElementById('text').innerHTML = `${num1} - ${num2} = ` + (num1 - num2);
    }
    else if (c == "*") {
        document.getElementById('text').innerHTML = `${num1} * ${num2} = ` + (num1 * num2);
    }
    else if (c == "/") {
        document.getElementById('text').innerHTML = `${num1} / ${num2} = ` + (num1 / num2);
    }
    else if (c == "%") {
        document.getElementById('text').innerHTML = `${num1} % ${num2} = ` + (num1 % num2);
    }
    else {
        document.getElementById('text').innerHTML = `Siz kiritgan belgi ${c} <br>Va bu belgi Matematik amal yani "+ - * / %" emas!`;
    }
}
else {
    let container=document.getElementById('container');
    container.style.display='none';
    document.getElementById('text').innerHTML="Sizga max 25 ta son kiritish mumkin !<br>Belgilangan miqdordan o'tib ketdingiz !";
    let text=document.getElementById('text');
    text.style.display='inline-block';
}
});
