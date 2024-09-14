// let a=prompt("Son Kiriting : ");

// if(a.toString().length!=0){
// if(a<=5 && a>=1){
//     console.log("Siz kiritgan son 6 dan kichik va siz kiritgan son : "+a);
// }
// else if(a>=5){
//     console.log("Siz kiritgan son 4 dan katta va siz kiritgan son : "+a);
// }
// else if(a<0){
//     console.log("Siz musbat son kiritdingiz !");
// }
// else if(a!=null && a.toString().length>0){
//     console.log("Harf qo'shish mumkin emas !");
// }
// }
// else if(a.toString().length ===0){
// console.log("Bo'shliq mavjud !");
// // }

// let a=+prompt("Son kiriting : ");

// // function sonlar50(a){
// if(a>=50){
//     if(a>=50 && a<=300){
//         let foiz1=(a*15)/100;
//         let natija1=foiz1+a;
//         console.log(natija1);
//     }
//     else if (a>300){
//         let foiz2 = (a*20)/100;
//         let natija2=foiz2+a;
//         console.log(natija2)
//     }
// }
// else {
//     console.log(`Minimal miqdor 50 siz kiritgan son esa ${a}\nSiz yana ${50-a} ta son yetishmayapdi !`)
// }
// // };

   let taym1=96;
   let taym2=10;
   let taym3=890;
   let taym4=880;
   let taym5=910;
   let taym6=10;

    let jamoa1 = (taym1+taym2+taym3)/3;
    let jamoa2 = (taym4+taym5+taym6)/3;
    if(jamoa1>=100 && jamoa2>=100){
        if(jamoa1>jamoa2){
            console.log(`Birinchi jamoa to'plagan ballar ${jamoa1} va birinchi jamoa g'alaba qozondi !`)
        }
        else if(jamoa2>jamoa1){
            console.log(`Ikkinchi jamoa to'plagan ballar ${jamoa2} va ikkinchi jamoa g'alaba qozondi !`);

        }
    }
    else if(jamoa1<100 || jamoa2<100) {
        console.log("Ikkala jamoa to'plagan bal ham 100 dan yuqori emas !\n"+`Birinchi jamoaning o'rtacha bali ${parseInt(jamoa1)}\nIkkinchi jamoa to'plagan ballar ${parseInt(jamoa2)}\nUlar orasida eng kattasi ${jamoa1>jamoa2?parseInt(jamoa1)+" yani jamoa 1":parseInt(jamoa2)+" yani jamoa 2"}`);
    }


// function main(time1, time2, time3) {
//     return (time1 + time2 + time3) / 3;
// }

// function result(jamoa1, jamoa2) {
//     const Jamoa1 = main(jamoa1[0], jamoa1[1], jamoa1[2]);
//     const Jamoa2 = main(jamoa2[0], jamoa2[1], jamoa2[2]);

//     if (Jamoa1 >= 100 && Jamoa2 >= 100) {
//         if (Jamoa1 > Jamoa2) {
//             console.log("1-Jamoa g'olib!");
//         } else if (Jamoa2 > Jamoa1) {
//             console.log("2-Jamoa g'olib!");
//         } else {
//             console.log("Durang, ikkala jamoa teng!");
//         }
//     } else {
//         console.log("Ikkala jamoaning ham o'rtacha ballari 100 dan kichik!");
//     }
// }

// result([110, 120, 130], [100, 105, 110]); 
