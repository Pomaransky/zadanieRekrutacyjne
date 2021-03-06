let $hamburger; 
let $navigation;
let $header;
const main = () =>{
    prepareDOMElements();
    prepareDOMEvents();
};
const prepareDOMElements = () => {
    $hamburger = document.querySelector('.hamburger');
    $navigation = document.querySelector('.navigation');
    $header= document.querySelector('.header');
};
const prepareDOMEvents = () => {
    $hamburger.addEventListener('click',hamburgerAnimation);
    window.addEventListener('scroll',headerAnimation);
};
const hamburgerAnimation = () =>{
    $hamburger.classList.toggle('hamburger_active');
    $navigation.classList.toggle('navigation_active');
}
const headerAnimation = () =>{
    let scrl = window.scrollY;
    if(scrl > 120){
        $header.style.setProperty('background-color','#fd5c3f');
    }else{
        $header.style.setProperty('background-color','transparent');
    }
}

document.addEventListener('DOMContentLoaded', main);