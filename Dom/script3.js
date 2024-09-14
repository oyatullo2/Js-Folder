let nameValue = "";
let ageValue = "";
let marriedValue = "";

document.querySelector("#name").addEventListener('input', function() {
    nameValue = document.querySelector("#name").value;
    updateText(); 
});

document.querySelector("#age").addEventListener('input', function() {
    ageValue = document.querySelector("#age").value;
    updateText(); 
});

document.querySelector("#married").addEventListener('input', function() {
    marriedValue = document.querySelector("#married").value;
    updateText(); 
});

function updateText() {
    let result = "";
    if (nameValue) {
        result += "Name: " + nameValue + "<br>";
    }
    if (ageValue) {
        result += "Age: " + ageValue + "<br>";
    }
    if (marriedValue) {
        result += "Married: " + marriedValue + "<br>";
    }
    document.querySelector("#text").innerHTML = result;
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        document.querySelector("#yes").click();
    }
});

document.querySelector("#yes").addEventListener('click', function() {
    let a = document.querySelector("#text1");
    
    if (nameValue.length > 0 && ageValue.length > 0 && marriedValue.length > 0) {
        a.innerHTML = "Saqlandi ✅";
        a.style.color = 'rgb(49, 220, 49)';
    } else {
        a.innerHTML = "Qatorlar to'ldirilmagan ❌";
        a.style.color = 'red';
    }
    
    a.style.animationPlayState = 'running';
});

document.querySelector("#no").addEventListener('click', function() {
    let a = document.querySelector("#text1");
    a.innerHTML = "Qayta urinib ko'ring ❌";
    a.style.color = 'red';
    a.style.animationPlayState = 'running';

    document.querySelector("#name").value = '';
    document.querySelector("#age").value = '';
    document.querySelector("#married").value = '';

    document.querySelector("#text").innerHTML = '';

    nameValue = "";
    ageValue = "";
    marriedValue = "";
});
