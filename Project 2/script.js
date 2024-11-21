



var button_click_menu = document.querySelector(".Button-Slider");
var sallah = document.querySelector(".sallah");
var box_links = document.querySelector(".Pock");
var box_links2 = document.querySelector(".Pock2");
button_click_menu.onclick = function(){
box_links.classList.toggle("show-menu");
button_click_menu.classList.toggle("x-button");
}
sallah.onclick = function(){
box_links2.classList.toggle("show-what-i-sell");

}
const header = document.querySelector('.header');
header.onmousemove = function(e){
const x = e.pageX - header.offsetLeft;
const y = e.pageY - header.offsetTop;
header.style.setProperty('--x',x + 'px');
header.style.setProperty('--y',y + 'px');
}