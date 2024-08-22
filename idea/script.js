document.getElementById('natija').addEventListener('click' , function main(){
    let a=document.getElementById('ornatish').value;
    let b=document.getElementById('tekshirish').value;

    let password=1117
    let pass1=Number(a);
    let pass2=Number(b);

    
    if(pass1==password && pass2==password){
        document.getElementById('text').innerHTML="Change Password !";
        let b=document.getElementById('text');
        b.style.color='rgb(58, 194, 58)';
        window.open('/oylik/index.html')
    }
    else{
        document.getElementById('text').innerHTML="Error Password !";
        let b=document.getElementById('text');
        b.style.color='red';
    }
})

let array=['gulhayo','gulhayo','gulhayo','gulhayo','gulhayo','gulhayo']
let nm=array.length;
if(nm<=5){
    let a=array.filter(array=> array=='gulhayo');
    console.log(`Siz yozgan so'z ${array} bu sozda ${a.length} martta "{ Gulhayo }" nomi takrorlangan !*"`);    
}
else{
    let a=array.filter(array=> array=='gulhayo');
    console.log("Siz yozgan ibora 5 ta so'zdan ko'p !")
    console.log(`Va siz yozgan so'zda ${a.length} martta "Gulhayo ismi takrorlangan !"`)
}