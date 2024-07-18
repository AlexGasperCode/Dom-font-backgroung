// let elemento;

// elemento = document;
// elemento = document.all;
// elemento = document.head;
// elemento = document.body;
// elemento = document.domain;
// elemento = document.forms[0];
// elemento = document.forms[0].id;
// elemento = document.forms[0].method;
// elemento = document.forms[0].classList;
// elemento = document.forms[0].action;

// elemento = document.links;
// elemento = document.links[4];
// elemento = document.links[4],classList;
// elemento = document.links[4],className;
// elemento = document.images;
// elemento = document.scripts;

// console.log(elemento);
// Seleccionar elementos por su clase
const header = document.getElementsByClassName('titulo');
console.log(header);
// Se usa ese id una vez por documento
// const logo = document.getElementById('logo');
// console.log(logo);
// Seleccionamos el segundo elemento
// Te permite seleccionar con la misma sintaxis de css
// const segundoCard = document.querySelector('section.hospedaje.card:nth-child(2)');
// console.log(logo);

// const segundoCard = document.querySelector('#segundoCard');
// console.log(logo);
// Seleccionar elementos HTML
//Maximo 1 elemento
// const segundoCard = document.querySelector('#segundoCard');
// console.log(logo);
// const navegacion = document.querySelector('nav');
// console.log(navegacion);
// Retorna todos los elementos que tengan la clase navegacion
// const navegacion = document.querySelectorAll('nav');
// console.log(navegacion);
const section = document.querySelector('section');
// En el css visibility:hidden no lo va encontrar
console.log(section.innerText);
// En el css visibility:hidden si lo va encontrar
console.log(section.textContent);
console.log(section.innerHTML);
// Se selecciona el contenido
// const section = document.querySelector('section').textContent;
// const Nuevocontenido = 'Manipulaciòn del doom';
// document.querySelector('section').textContent = Nuevocontenido;

// const imagen = document.querySelector('.imagen');
// imagen.src = './img/transparente.png';
const encabezado = document.querySelector('h1');
// console.log(encabezado.style);
encabezado.style.backgroundColor = 'green';
encabezado.style.fontFamily = 'Arial';
encabezado.style.textTransform = 'uppercase';

const section1 = document.querySelector('.section1');
section1.classList.add('section1', 'section2','section3');
section1.classList.remove('section1');
console.log(section1.classList);