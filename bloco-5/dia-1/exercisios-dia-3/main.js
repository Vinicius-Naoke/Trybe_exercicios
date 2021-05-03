const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

divUm.addEventListener('mouseover',addTech)
divDois.addEventListener('mouseover',addTech)
divTres.addEventListener('mouseover',addTech)

function addTech(event) {
    let techCheck = document.body.querySelectorAll('.tech');
    if (techCheck.length >= 1) {
        for (index = 0; index < techCheck.length; index += 1) {
            if (techCheck[index].classList.contains('tech')) {
                techCheck[index].classList.remove('tech');
               
            }
        }
       
    }
    event.target.className = 'tech';
    }
    
   
    input.addEventListener('change', changeText);
    function changeText (){
       let choice = document.body.querySelectorAll('.tech')
        choice[0].innerText = input.value;
        choice[0].style.fontSize = '1.5em';
       
    }


myWebpage.addEventListener('mouseover', colorChange);
myWebpage.addEventListener('mouseout', colorChangeBack);
myWebpage.addEventListener('click', webChange);

function colorChange (){
    myWebpage.style.color = 'orange';
}
function colorChangeBack (){
    myWebpage.style.color = 'white';
}
function webChange (){
    window.open('https://vinicius-naoke.github.io./','_blank');
}



    /*
 Copie esse arquivo e edite apenas ele;
 Crie uma função que adicione a classe 'tech' ao elemento selecionado;
1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
 Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
com a classe 'tech';
 Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
redirecione para alguma página;
1. Que tal redirecionar para seu portifólio?
 Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo;

Segue abaixo um exemplo do uso de event.target:
*/

