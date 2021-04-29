let headColor = document.getElementById('header-container'); 
headColor.style.backgroundColor = '#2fc18c';

let emergencyColor = document.getElementsByClassName('emergency-tasks');
for(let index = 0; index < emergencyColor.length; index +=1){
    emergencyColor[index].style.backgroundColor = 'pink' ;
}

let emergencyInsideColors = document.querySelectorAll('.emergency-tasks h3');
for(let index = 0; index < emergencyInsideColors.length; index +=1){
    emergencyInsideColors[index].style.backgroundColor = 'red' ;
}


let noEmergencyColor = document.getElementsByClassName('no-emergency-tasks');
for(let index = 0; index < noEmergencyColor.length; index +=1){
    noEmergencyColor[index].style.backgroundColor = 'yellow' ;
}

let noEmergencyInsideColors = document.querySelectorAll('.no-emergency-tasks h3');
for(let index = 0; index < noEmergencyInsideColors.length; index +=1){
    noEmergencyInsideColors[index].style.backgroundColor = 'black' ;
}

let footerColor = document.querySelector('#footer-container'); footerColor.style.backgroundColor = 'green';
