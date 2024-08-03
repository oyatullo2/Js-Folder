document.getElementById('multiplyButton').addEventListener('click', function() {
    // Birinchi input (soat) qiymatini olish
    let soatValue = document.getElementById('soat').value;
    // Ikkinchi input (kun) qiymatini olish
    let kunValue = document.getElementById('kun').value;

    // Qiymatlarni raqamga aylantirish
    let soatNumber = Number(soatValue);
    let kunNumber = Number(kunValue);

    // Birinchi qiymatni 12000 ga ko'paytirish
    if(soatNumber>24){
        document.getElementById('result').innerHTML="Siz 24 soatdan katta son yozdigniz ! <br>Eslatma bir kunda 24 soat bor !";
    }
    else if(kunNumber<0){
        document.getElementById('result').innerHTML="Siz manfiy son kiritdingiz !";
    }
    else if(soatNumber<0 || kunNumber>0){
        document.getElementById('result').innerHTML="Siz manfiy son yozdingiz !<br>Eslatma soatlarda manfiy son bo'lmaydi !";
    }
    else if(soatNumber<9 & soatNumber>0){
        let intermediateResult = soatNumber * 11400;
        let finalResult = intermediateResult * kunNumber;
        document.getElementById('result').innerText = "Natija: " + finalResult;
    }
    else if(soatNumber>8 & soatNumber<25){
        let intermediateResult = soatNumber * 12000;
        let finalResult = intermediateResult * kunNumber;
        document.getElementById('result').innerText = "Natija: " + finalResult;
    }
    // Olingan natijani kun qiymatiga ko'paytirish
    // let finalResult = intermediateResult * kunNumber;

    // Natijani qizil rangda ko'rsatish
});
