var typed= new Typed(".text" ,{
    strings:["Frontend Developer","Artist"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})
//active menu/////
let menuLi = document.querySelectorAll("header nav  a ");
let section= document.querySelectorAll("section");
function activeMenu(){
    let len = section.length;
    while(--len && window.scrollY + 97 <= section[len].offsetTop){}
    menuLi.forEach(sec=> sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll",activeMenu);

// sticky navbar///
const header= document.querySelector('header');
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY>50)
})