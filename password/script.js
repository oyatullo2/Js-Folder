// // let a=prompt("Parolni kiriting : ");
// // if(a==1000){
//     // document.getElementById('text').innerHTML="Oyatullo";
//     let b=setTimeout(function(){
//         let element=document.getElementById('text');
//         if (element){
//             element.style.display='block';
//             element.style.overflow='100';
//             element.style
//             element.style.transform='translateY(0)';
        
//     }},1500)
// // }
// // else{
// //     document.write("Error password");
// // }


// let nums = [1, 9, 9, 3, 9,9 ,9,9,9,9,9,9,9,5,5,5,4,2,6,9];
// let result = nums.filter(nums=>nums==9);
// let result1=nums.filter(nums=>nums==5);

// console.log(`Siz kiritgan sonlar yani "${nums}" sonlar orasida ${result.length} ta 9 bor`);
// console.log(`Bu sonlar orasida ${result1.length} ta 5 bor`);


// document.getElementById('result').addEventListener('click', function main() {
//     // Inputni olish
//     let a = document.getElementById('texts').value;

//     // Stringni massivga aylantirish (masalan, har bir raqamni alohida ajratish)
//     let numArray = a.split('').map(Number);

//     // 1 bo'lgan elementlarni filtrlash
//     let result = numArray.filter(num => num === 1);

//     // Natijani chiqarish
//     document.getElementById('text').innerHTML = `Siz kiritgan sonlar ${numArray} bu sonlar ichida ${result.length} ta 1 bor!`;
// });


// function arrayFront9(nums) {
//     // Massivning faqat dastlabki 4 ta elementini tekshiramiz yoki massiv uzunligini tekshirish orqali kamida mavjud bo'lgan qismini tekshiramiz.
//     let limit = Math.min(nums.length, 4); 

//     for (let i = 0; i < limit; i++) {
//         if (nums[i] === 9) {
//             return true;
//         }
//     }
//     return false;
// }

// let password=prompt("Parol yarating : ");
// let result="";


// result=+password;
// let a=prompt("Parolni kiriting : ");
// if(a==result){
//     console.log("Parol to'g'ri !");
//     alert("Siz to'gri parol kiritdingiz !");
// }
// else{
//     console.log("Xato parol");
//     alert("Siz xato parol kiritdingiz !");
//     let savol=prompt("Qayta urinasizmi ?");
//     if(savol=="ha"){
//         let a2=prompt("Yana bir bor urining ! ");
//         if(a2==result){
//             alert("Siz togri parol kiritdingiz !");
//             console.log("Ikkinchi bor togri")
//         }
//         else{
//             console.log("Ikkinchi bor ham hato !");            
//         }
//     }
//     else{
//         console.log("Siz taklifni rad etdingiz !");
        
//     }
// }