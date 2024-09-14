// const mevalar=(fruit)=>fruit*5;

// const mevalar2=(a,b)=>{
//     const q=mevalar(a);
//     const w=mevalar(b);
    
//     const result=(`${q} ta olma\n${w} ta nok bor`);
//     return result;
// }

// console.log(mevalar2(5,6));



// function calculateBMI(mass, height) {
//     return mass / (height ** 2);
// }

// function compareBMIs(markMass, markHeight, johnMass, johnHeight) {
//     let markBMI = calculateBMI(markMass, markHeight);
//     let johnBMI = calculateBMI(johnMass, johnHeight);
//     let markHigherBMI = markBMI > johnBMI;
//     console.log("Mark BIM:", markBMI, "John BIM:", johnBMI, "Markning BMI Jognning BMI dan katta:", markHigherBMI);
// }

// compareBMIs(78, 1.69, 92, 1.95);

// compareBMIs(95, 1.88, 85, 1.76);


// console.log("\nHammasi to'g'ri isbhlamoqda !")




function balltopish(raund1,raund2,raund3){
    return (raund1+raund2+raund3)/3;
}

function jamoa(jamoa1,jamoa2){
    const natija1=balltopish(jamoa1);
    const natija2=balltopish(jamoa2);
    const result1=natija1>natija2;

    if(result1 && natija2*2<natija1){
        console.log("1 Jamoa jamoa g'alaba qozondi !")
    }
    else if(!result1 && natija1*2<natija2){
        console.log("2 Jamoa jamoa g'alaba qozondi !")
    }
    else {
        console.log("ikkila jamoa ham munosib emas !")
    }
}

jamoa(86,23);
