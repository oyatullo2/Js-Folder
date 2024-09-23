let isPVisible = false;

document.addEventListener('keydown', function (main) {
    let e = document.querySelector('p');
    let r = document.querySelector("#x");
    if (main.key === 'Escape') {
        e.style.display = 'none';
        r.style.display = 'none';
        isPVisible = false;
    }
});

document.querySelector("#btn1").addEventListener('click', function () {
    let p = document.querySelector('p');
    let x = document.querySelector("#x");
    p.style.display = 'inline-block';
    p.style.opacity = '100%';
    p.innerHTML = 'Show 1 clicked !';
    p.style.transition = '5s';
    x.style.display = 'inline-block';
    isPVisible = true;
});

document.querySelector("#btn2").addEventListener('click', function () {
    let p = document.querySelector('p');
    let x = document.querySelector("#x");
    p.style.display = 'inline-block';
    p.style.opacity = '100%';
    p.innerHTML = 'Show 2 clicked !';
    p.style.transition = '5s';
    x.style.display = 'inline-block';
    isPVisible = true;
});

document.querySelector("#btn3").addEventListener('click', function () {
    let p = document.querySelector('p');
    let x = document.querySelector("#x");
    p.style.display = 'inline-block';
    p.style.opacity = '100%';
    p.innerHTML = 'Show 3 clicked !';
    p.style.transition = '5s';
    x.style.display = 'inline-block';
    isPVisible = true;
});

document.querySelector("#x").addEventListener('click', function () {
    let p = document.querySelector('p');
    let x = document.querySelector("#x");
    p.style.display = 'none';
    x.style.display = 'none';
    isPVisible = false;
});

document.addEventListener('click', function (event) {
    let p = document.querySelector('p');
    let x = document.querySelector("#x");

    if (isPVisible && !p.contains(event.target) && !x.contains(event.target) && !event.target.matches('button')) {
        p.style.display = 'none';
        x.style.display = 'none';
        isPVisible = false;
    }
});
