document.getElementById('result').addEventListener('click' , function main(){
    let num=document.getElementById('num').value;
    let num1=Number(num);


    // let ming=parseInt(num1/1000);
    // let yuz=parseInt(num1/100)%10;

    let number3=parseInt(num1/100%10);
    let number1=parseInt(num1/10%10);
    let number=parseInt(num1%10);

    switch(number3){
        case 1:
            document.getElementById('text2').innerHTML="bir yuz";break;
        case 2:
            document.getElementById('text2').innerHTML="ikki yuz";break;
        case 3:
            document.getElementById('text2').innerHTML="uch yuz";break;
        case 4:
            document.getElementById('text2').innerHTML="to'rt yuz";break;
        case 5:
            document.getElementById('text2').innerHTML="besh yuz";break;
        case 6:
            document.getElementById('text2').innerHTML="olti yuz";break;    
        case 7:
            document.getElementById('text2').innerHTML="yetti yuz";break;
        case 8:
            document.getElementById('text2').innerHTML="sakkiz yuz";break;
        case 9:
            document.getElementById('text2').innerHTML="to'qqiz yuz";break;
    }
    switch(number1){
        case 1:
            document.getElementById('text').innerHTML="o'n";break;
        case 2:
            document.getElementById('text').innerHTML="yigirma";break;
        case 3:
            document.getElementById('text').innerHTML="o'ttiz";break;
        case 4:
            document.getElementById('text').innerHTML="qirq";break;
        case 5:
            document.getElementById('text').innerHTML="ellik";break;
        case 6:
            document.getElementById('text').innerHTML="oltmish";break;    
        case 7:
            document.getElementById('text').innerHTML="yetmish";break;
        case 8:
            document.getElementById('text').innerHTML="sakson";break;
        case 9:
            document.getElementById('text').innerHTML="to'qson";break;
    };
    switch(number){
        case 1:
            document.getElementById('text1').innerHTML="bir";break;
        case 2:
            document.getElementById('text1').innerHTML="Ikki";break;
        case 3:
            document.getElementById('text1').innerHTML="Uch";break;
        case 4:
            document.getElementById('text1').innerHTML="To'rt";break;    
        case 5:
            document.getElementById('text1').innerHTML="Besh";break;
        case 6:
            document.getElementById('text1').innerHTML="Olti";break;
        case 7:
            document.getElementById('text1').innerHTML="yetti";break;
        case 8:
            document.getElementById('text1').innerHTML="sakkiz";break;
        case 9:
            document.getElementById('text1').innerHTML="to'qqiz";break;
    };
    switch (num){
        case "q":
            document.getElementById('text').innerHTML="Qish";break;
        case "y":
            document.getElementById('text').innerHTML="Yoz";break;
        case "k":
            document.getElementById('text').innerHTML="Kuz";break;
        case "b":
            document.getElementById('text').innerHTML="Bahor";break;
    }

//     let oy=num1*12;
//     let kun=num1*365
//     let soat=24*365*num1;

//     document.getElementById('text').innerHTML=`${num1} yil ${oy } oy ga teng`;
//     document.getElementById('text1').innerHTML=`${num1} yil ${kun} kun ga teng`;
//     document.getElementById('text2').innerHTML=`${num1} yil ${soat} soatga ga teng`;

})
   