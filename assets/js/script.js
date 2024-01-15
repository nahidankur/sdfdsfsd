const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu li a');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

// close menu when you click on a menu item 
menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-110%';
}


function scrollToSection(sectionId) {
    const targetSection = document.getElementById(sectionId);

    if (targetSection) {
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth',
        });
    }
}

function scrollToAboutSection(sectionId) {
    const aboutSection = document.getElementById(sectionId);

    if (aboutSection) {
        window.scrollTo({
            top: aboutSection.offsetTop,
            behavior: 'smooth',
        });
    }
}