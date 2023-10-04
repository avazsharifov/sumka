
let sumkii = document.querySelector(".sumki")
let pervie = document.querySelector(".pervie")
let vse = document.querySelector(".vse")
let sifra = document.querySelector(".malika")
 let caunt = 0
 function yunus() {

let sumka = document.createElement("div")
let foto = document.createElement("div")
let img = document.createElement("img")
let opisanie = document.createElement("div")
let zagolovok = document.createElement("zagolovok")
let h3 = document.createElement("h3")
let ppp = document.createElement("div")
let p = document.createElement("p")
let  sena = document.createElement("div")
let price = document.createElement("div")
let pr_img = document.createElement("img")
let pr_h4 = document.createElement("h4")
let yul_h4 = document.createElement("h4")
let but = document.createElement("button")
let yul_img = document.createElement("img")
let yulduz = document.createElement("div")
let button = document.createElement("div")
let kubic = document.createElement("div")
let kub_img = document.createElement("img")
let kub_h4 = document.createElement("h4")


sumka.classList.add("sumka")
foto.classList.add("foto")
img.src = "sumka.png"
opisanie.classList.add("opisanie")
h3.innerHTML = "MEN’S CLOTHING (120)"
ppp.classList.add("ppp")
p.innerHTML = "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, <br> your everyday"
sena.classList.add("sena")
price.classList.add("price")
pr_img.src = "dollar.png"
pr_h4.innerHTML = "109"
yulduz.classList.add("yulduz")
yul_img.src = "star.svg"
yul_h4.innerHTML = "3,9"
kubic.classList.add("kubic")
kub_img.src = "Group 9.svg"
but.innerHTML = "В избранное"
kub_h4.innerHTML = "120"
button.classList.add("button")






sumkii.append(sumka)
sumka.append(foto)
foto.append(img)
sumka.append(opisanie)
opisanie.append(zagolovok)
zagolovok.append(h3)
opisanie.append(ppp)
ppp.append(p)
opisanie.append(sena)
sena.append(price)
price.append(pr_img)
price.append(pr_h4)
sena.append(yulduz)
yulduz.append(yul_img)
yulduz.append(yul_h4)
sena.append(kubic)
kubic.append(kub_img)
kubic.append(kub_h4)
sumka.append(button)
button.append(but)

but.onclick = () => {
    if(but.classList.contains("avaz")) {
       caunt --
       sifra.innerHTML = caunt
       but.classList.remove("avaz")
        
    }else {
        caunt ++
        but.classList.add("avaz")
        sifra.innerHTML = caunt
    }
   }
 }


function murod() {
for(let i =0; i <8 ; i++) {
    yunus()
}   
}

vse.onclick = () => {
   let mur = sumkii.childElementCount


   if(mur <=5) {
      murod()
       } 



}















    


























