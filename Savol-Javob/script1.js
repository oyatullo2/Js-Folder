document.addEventListener('keydown',function (main){
    if(main.key==='Enter'){
        document.getElementById('next').click();
    }
    else if(main.key==='Shift'){
        document.getElementById('next').click();
    }
});
document.getElementById('next').addEventListener('click',function main(){
    let a=document.getElementById('javob').value;


    if(a==="ha"){
        document.getElementById('text').innerHTML="Jonim meni ❤️";
    }
    else if(a==="yoq"){
        document.getElementById('text').innerHTML="Idinnaxuy bomasa !";
    }
    else {
        document.getElementById('text').innerHTML="Narmalni yoze ha yoki yoq de !"; 
    }
})