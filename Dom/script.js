// const text=document.querySelector("#h1")
// console.log(text);
// const text1=document.getElementById('h2');
// console.log(text1);

// const text2=document.querySelector('h1');
// text2.setAttribute('id','text5');
// console.log(text2);


// const a=document.querySelector('h1');
// a.innerHTML="<mark>Hello</mark>";

// a.style.color='red'
// console.log(a)


const add=document.querySelector("#button1");
const delete1=document.querySelector("#button2");
const result=document.querySelector("#text")

let start=0;

add.addEventListener("click",addNumber);
delete1.addEventListener('click',deleteNumber);

function addNumber(){
    result.innerHTML=start++;
}
function deleteNumber(){
    result.innerHTML=--start-1;
}