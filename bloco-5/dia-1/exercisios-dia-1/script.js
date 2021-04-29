
     function textAdd(element, string) {
         let paragraphs = document.getElementsByTagName(element)[1]
         paragraphs.innerHTML = string;
     }
     textAdd('p', 'macacoedamqwd');

     function changeSideSquare(color) {
         let colorBlock = document.getElementsByClassName('main-content')[0]
         colorBlock.style.backgroundColor = color;
     }
     changeSideSquare('rgb(76,164,109)')

     function changeInnerSquare(color) {
         let innerColor = document.getElementsByClassName('center-content')[0]
         innerColor.style.backgroundColor = color;

     }
     changeInnerSquare('white');

     function fixText(text) {
         let textToFix = document.getElementsByClassName('title')[0]
         textToFix.innerText = text;

     }
     fixText('Exercício 5.1 - JavaScript');

     function upperCase(element) {
         let vari = document.getElementsByTagName(element);
         for (let index = 0; index < vari.length; index += 1) {
             vari[index].innerHTML = vari[index].innerHTML.toUpperCase();
         }
     }

     upperCase('p')

     function showParagraphs() {
         let paragraphs = document.getElementsByTagName('p');
         for (let index = 0; index < paragraphs.length; index += 1) {
             console.log(paragraphs[index].innerHTML);
         }
     }
     showParagraphs();