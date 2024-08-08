document.getElementById('button').addEventListener('click',function main(){
    let number=document.getElementById('num1').value;
    let num=Number(number);

    switch (true){
        case (num>80):
            document.getElementById('text').innerHTML="Hello World";break;
    }
    switch(true){
        case (num<80):
            document.getElementById('text').innerHTML="World Hello";break;
    }
})