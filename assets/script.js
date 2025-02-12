let secilenlerDiv = $("#secilenler");
let secilenler = [];


//Rastgele sayı üretme fonksiyonu
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  
  //İçeriği değiştirme fonksiyonu
function innerHTML(girdi, girilen) {
    document.getElementById(girdi).innerHTML = girilen;
}

function secilenCreate(url1,url2,name) {
    let Varmı = false;
    let name2;

    if (name == "C#") {
        name2 = "Cplus";
    }else{
        name2 = name;
    }
    console.log(url1+url2);
    console.log(name);
    
    console.log(secilenlerDiv[0].children.length);

    for (let i = 0; i < secilenlerDiv[0].children.length; i++) {

        console.log(secilenlerDiv[0].children[i].id);
        console.log(`Sec${name}`);

        if (`Sec${name2}` == secilenlerDiv[0].children[i].id) {
            console.log("EŞİT");
            Varmı = true
        }else{
            console.log("EŞİT DEĞİL");
        }

    }

    console.log(Varmı);

    if (!Varmı) {
        secilenlerDiv[0].innerHTML = secilenlerDiv[0].innerHTML + `<div id="Sec${name2}" class="col mt-3 ms-3 p-0"><span class="secilen"><img src="${url1 + url2}" width="23px" alt="${name}"> ${name} <button onclick="DeleteSec(Sec${name2})"><i class="fa-brands fa-x-twitter"></i></button></span></div>`
    }
}

function DeleteSec(button) {
    console.log(button);
    button.remove();
}