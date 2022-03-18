// submenu

$(document).ready(function() {
    var botao = $('.btn-1');
    var dropDown = $('.ul-menu-1');    
   
       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
       });
   });
   $(document).ready(function() {
       var botao = $('.btn-2');
       var dropDown = $('.ul-menu');    
      
          botao.on('click', function(event){
              dropDown.stop(true,true).slideToggle();
              event.stopPropagation();
          });
      });
      const btnMobile = document.getElementById('btn-mobile');

function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

btnMobile.addEventListener("click", toggleMenu);


let time = 2000;
    currentImageIndex = 0;
    images = document
                .querySelectorAll("#slidepos img")
    max = images.length;

    function nexImage(){

        images[currentImageIndex]
        .classList.remove("selected")

        currentImageIndex++

        if(currentImageIndex >= max)
        currentImageIndex = 0

        images[currentImageIndex]
        .classList.add("selected")
    }

    function start (){
     setInterval (() => {
        // logica
        nexImage()
     }, time)
    }

    window.addEventListener("load", start)
///////////////////////// controle


let tempo = 2000;
currentImage = 0;
imagem = document
        .querySelectorAll("#slidecontrole img")
adc = imagem.length;

function nexImagem(){

imagem[currentImage]
.classList.remove("selected")

currentImage++

if(currentImage >= adc)
currentImage = 0

imagem[currentImage]
.classList.add("selected")
}

function go (){
setInterval (() => {
// logica
nexImagem()
}, tempo)
}

window.addEventListener("load", go)

///////////////// fibra 

let hora = 2000;
currentImg = 0;
img = document
        .querySelectorAll("#slidefibra img")
adicionar = img.length;

function nexImg(){

    img[currentImg]
.classList.remove("selected")

currentImg++

if(currentImg >= adicionar)
currentImg = 0

img[currentImg]
.classList.add("selected")
}

function comecar (){
setInterval (() => {
// logica
nexImg()
}, hora)
}

window.addEventListener("load", comecar)

///////////////// principal

let hr = 2000;
currentimg = 0;
imgn = document
        .querySelectorAll("#slideprincipal img")
adic = imgn.length;

function nextImg(){

    imgn[currentimg]
.classList.remove("selected")

currentimg++

if(currentimg >= adic)
currentimg = 0

imgn[currentimg]
.classList.add("selected")
}

function play (){
setInterval (() => {
// logica
nextImg()
}, hr)
}

window.addEventListener("load", play)

// animação 

const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };
  
  const target = document.querySelectorAll('[data-animeplano]');
  const animationClass = 'animate';
  
  function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 2) / 2);
    target.forEach(function(element) {
      if((windowTop) > element.offsetTop) {
        element.classList.add(animationClass);
      } else {
        element.classList.remove(animationClass);
      }
    })
  }
  
  animeScroll();
  
  if(target.length) {
    window.addEventListener('scroll', debounce(function() {
      animeScroll();
    }, 200));
  }

  // maquina de escrever 
  function typeWrite(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i)=> {
        setTimeout(() => elemento.innerHTML += letra, 75 * i);
    });

  }

  const titulo = document.querySelector('.maquina');
  typeWrite(titulo);
  typeWrite(document.querySelector('.maquina-atendimento'));
