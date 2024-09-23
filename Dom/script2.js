let count = 1; 

document.querySelector("#add").addEventListener('click', function() {
    let a = document.querySelector("#text");
    a.innerHTML += `Item ${count}<br>`; 
    count++; 
});

document.querySelector("#delete").addEventListener('click', function() {
    let b = document.querySelector("#text");
    let items = b.innerHTML.trim().split('<br>').filter(item => item !== "");
    if (items.length > 0) { 
        items.pop();
        b.innerHTML = items.join('<br>') + (items.length > 0 ? '<br>' : '');
        count--; 
    }
});
