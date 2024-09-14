document.addEventListener('keydown',function(main){
    if(main.key==='Enter'){
        main.preventDefault();
        document.getElementById('result').click();
    }
})
document.getElementById('result').addEventListener('click',function event(){
    let a=document.getElementById('password-input1').value;
    let b=document.getElementById('password-input2').value;
    let pass1=Number(a);
    let pass2=Number(b);
    localStorage.setItem('userPassword',pass1);
    if(pass1===pass2){
        window.location.href='/passwords/welcome.html';        
        console.log('Correct password !');
        // if(pass3===pass1){
        //     console.log("Parol togri !");
        // }
    }
    else if(pass1!=pass2){
        console.log("Xatolik bor !");
    }
    else if(pass1 != null && pass1 != null){
        console.log("Siz kiritgan parolda xatolik yo'q !")
    }
    else if(pass1===null || pass2 === null){
        console.log("Siz kiritgan parolda xatolik bor !")
    }
    else{
        console.log("Error")
    }
});
