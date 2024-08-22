// function main(){
//     window.alert("Hello world")
// }

// setTimeout (main,1000);


// function main(){
//     document.write("Hello wrold !");
// }

// setTimeout(main,1000);


let b=setTimeout(function(){
    let element=document.getElementById('text');
    if (element){
        element.style.display='block';
        element.style.overflow='100'
        element.style.translateY(0);
    }
},1000)