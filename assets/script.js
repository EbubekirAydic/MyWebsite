let secilenlerDiv = $("#secilenler");
let Games = $("#Games");
let secilenler = [];
let arananlar = [];
let arananGames = [];
let GamesArray = [];

for (let i = 0; i < Games[0].children.length; i++) {
    GamesArray.push(Games[0].children[i]);
}


//rastgele sayı üretme fonksiyonu
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  
  //İçeriği değiştirme fonksiyonu
function innerHTML(girdi, girilen) {
    document.getElementById(girdi).innerHTML = girilen;
}

//İşlem seçme butonları ve class eklemek
function ToggleOperation(Element,ClassNName) {
  if (Element.classList.contains(ClassNName)) {
    Element.classList.remove(ClassNName);
  } else {
    Element.classList.add(ClassNName);
  }
}

function secilenCreate(url1,url2,name,sayi) {
    let Varmı = false;
    let name2;

    if (!sayi == 1) {
        sayi = 0;
    }

    if (name == "C#") {
        name2 = "Cplus";
    }else{
        name2 = name;
    }
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
        secilenlerDiv[0].innerHTML = secilenlerDiv[0].innerHTML + `<div id="Sec${name2}" class="col mt-3 ms-3 p-0"><span class="secilen"><img style="border-radius: ${sayi == 1 ? 300 : 0}px;" src="${url1 + url2}" width="23px" alt="${name}"> ${name} <button onclick="DeleteSec(Sec${name2})"><i class="fa-brands fa-x-twitter"></i></button></span></div>`
    }

    arananlar.push("Sec"+name2);

    ProjelerYenile()
    
}

function DeleteSec(button) {
    
    arananlar.splice(arananlar.indexOf(button.id),1);

    button.remove();

    ProjelerYenile()
}

function ProjelerYenile() {

    Games[0].innerHTML = "";

    for (let i = 0; i < GamesArray.length; i++) {

        for (let a = 0; a < arananlar.length; a++) {

            console.log(arananlar);
            console.log(arananlar[a]);

            if (GamesArray[i].classList.contains(arananlar[a])) {
                let yazdırizni = true;

                console.log(Games[0].children);

                for (let e = 0; e < Games[0].children.length; e++) {
                    
                    console.log(Games[0].children[e].id == GamesArray[i].id);
                    console.log(Games[0].children[e].id + GamesArray[i].id);

                    if (Games[0].children[e].id == GamesArray[i].id) {
                        yazdırizni = false;
                    }
                }

                if (yazdırizni) {
                    Games[0].innerHTML = Games[0].innerHTML + GamesArray[i].outerHTML;
                }
    
            }
        }

        if(arananlar.length === 0){
            for (let a = 0; a < GamesArray.length; a++) {
                Games[0].innerHTML = Games[0].innerHTML + GamesArray[a].outerHTML;
            }
        }
    }
}

function AramaYap() {
    const searchTerm = document.getElementById('aramaInput2').value.toLowerCase();
    const items = GamesArray;

    console.log(items);
    console.log(searchTerm);

    items.forEach(item => {
      const title = item.textContent.toLowerCase();
      item.style.display = title.includes(searchTerm) ? 'block' : 'none';
    });
}

$("#aramaInput2").keydown(function(event) {


    if (event.keyCode == 13) {
        AramaYap();
    }

})


