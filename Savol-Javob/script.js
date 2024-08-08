alert("Savollarga javob bering va har bir to'gri javob uchun +5 ball oling !");
alert("1 Bosqich !");
let savol1=prompt("Dunyo aholisi qancha 2024 yil malumoti bilan ?");

if(savol1==="9mlrd"){
    alert(`Siz bergan javob : ${savol1}. Javobingiz to'g'ri !`);
    alert("Siz 5 ballni qo'ga kiritdingiz !");
    alert("Tabriklaymiz siz 2 bosqichga o'tidingiz !");
    let savol2=prompt("Yerning nechchi foizi suvdan iborat ?");
    if(savol2==="96.5"){
        alert(`Siz bergan javob : ${savol2} . Javobingiz to'g'ri !`);
        alert("Tabriklaymiz siz 3 chi bosqichga o'tdingiz !");
        alert("Siz 10 ballni qo'lga kiritdingiz !");
        let savol3=prompt("Yerning nechchi fozini quruqlik tashkil etgan ?");
        if(savol3==="3.5"){
            alert(`Siz bergan javob : ${savol3} . Javobingiz to'gri !`);
            alert("Tabriklaymiz siz 4 chi bosqichga o'tdingiz !");
            alert("Tabriklaymiz siz 15 ballni qo'lga kiritdingiz !");
            let savol4=prompt("Ma'rufning tug'ilgan kuni qachon ?");
            if(savol4==="14-iyun"){
                alert("Qoyil siz barcha savollardan o'tdingiz !");
                alert("Siz to'plagan ballar 20ball bo'ldi !");
                document.write("Tabriklaymiz siz barcha savollardan o'tdingiz !");
            }
            else{
                document.getElementById('text').innerHTML="Afsuski siz xato javob berdingiz !!!<br>Xafa bo'lmang siz 10 ballni qo'lga kiritdingiz !";
            }
        }
    else{
        document.getElementById('text').innerHTML="Afsuski siz xato javob berdingiz !!!<br>Xafa bo'lmang siz 5 ballni qo'lga kiritdingiz !";
    }
}
else{
    document.getElementById('text').innerHTML="Afsuski siz xato javob berdingiz !!!<br>Siz xech qanday ball yig'olmadingiz !";
}
}