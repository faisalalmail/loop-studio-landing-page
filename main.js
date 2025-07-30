const headerContent = document.getElementById("headerContent");
const burger = document.getElementById("burger");
const closeButton = document.getElementById("close");
const hero = document.getElementById("hero");
const navSmall = document.getElementById("nav-small");







function openNav(){
    console.log('nav requested');
    headerContent.style.background = 'black';
    burger.style.display = 'none';
    closeButton.style.display = 'block';
    hero.style.display = 'none';
    navSmall.style.display = 'flex';
}

function closeNav(){
    burger.style.display = 'block';
    closeButton.style.display = 'none';
    headerContent.style.background = 'none';
        hero.style.display = 'flex';
    navSmall.style.display = 'none';

}