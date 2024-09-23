document.querySelector("#textArea").addEventListener('input', function() {
    let textArea = document.querySelector("#textArea");
    let count=document.querySelector("#charCount");
    let charCount = textArea.value.length;
    document.querySelector("#charCount").textContent = charCount;

    if (charCount <= 50) {
        textArea.style.borderColor = 'rgb(62, 231, 62)';
        textArea.style.color='rgb(62,231,62)';
    }
    else if(charCount>50){
        textArea.style.borderColor = 'red';
        textArea.style.color='red'
        charCount.style.color='red'
        document.querySelector("#error").innerHTML=`Siz ${charCount} ta so'z yozdingiz !<br>Va bu juda ko'p !`
    }
});