// let yil=prompt("Hozirgi yilni kiriting : ");

// let yosh=prompt("Tu'gilgan yilingizni kiriting : ");

// let natija=(yil-yosh);

// if(natija>18){

//     console.log(`Sizning yoshingiz ${natija} da !\nSiz haydovchilik guvohnonmasini ololasiz !`)

// }

// else if(natija<18){

//     console.log(`Sizning yoshingiz ${natija} da !\nSiz haydovchilik guvohnonmasini ololmaysiz !`)

// }



// const age=(a,b,name)=>a+b+" "+name;
// console.log(age(16,15,"Oyatullo"));     //arrow function 

// const age=birthyear=>{
//     const yosh=2024-birthyear;
//     const nafaqa=65-yosh;
//     return nafaqa;
// }

// console.log(age(2008));    //arrow uchun misol




const yosh=prompt("Tug'ilgan yilingizni kiriting : ");
const yil=prompt("Hozirgi yilni kiriting : ");

function main(pensiya){
    const age=yil-yosh;
    let pensiyaga=65-age;
    console.log(`Sizning yoshingiz : ${age}-da !\nSiz pensiyaga chiqishingizga ${pensiyaga}-yil bor !`);
}

main()