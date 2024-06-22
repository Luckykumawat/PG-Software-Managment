var menu_icon =  document.querySelector('.menu-icon');
var menu =  document.querySelector('.menu');
var cross =  document.querySelector('.close');
var field =  document.querySelector('.ancer');
var log =  document.querySelector('.log ');
var btan =  document.querySelector('.btan ');
var login_page =  document.querySelector('.login-page');

menu_icon.addEventListener('click',function(){
    menu.style.visibility = "visible";

})
cross.addEventListener('click',function(){
    menu.style.visibility = "hidden";
    
})
field.addEventListener('click',function(){
    menu.style.visibility = "hidden";
    
})
log.addEventListener('click',function(){
    login_page.style.visibility = "visible"
})
btan.addEventListener('click',function(){
    login_page.style.visibility = "hidden"

})