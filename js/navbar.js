// JavaScript Document

window.addEventListener("scroll", function (){
    let header = document.querySelector('header');
    header.classList.toggle('scroll_nav', window.scrollY > 50)
    
})