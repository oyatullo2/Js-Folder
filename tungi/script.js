document.getElementById('button1').addEventListener('click',function main(){
    let tun=document.getElementById('tun').value;
    let kunlar=Number(tun);
    let natija=kunlar*15000;
    document.getElementById('text').innerHTML="Natija : "+natija;

})