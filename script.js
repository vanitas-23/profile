const menuEl=document.querySelector(".menuToggle");
const navEl=document.querySelector(".navigation");
const nameEl=document.querySelector(".name");
menuEl.onclick=function(){
    navEl.classList.toggle('active');
    nameEl.classList.toggle('active');
}