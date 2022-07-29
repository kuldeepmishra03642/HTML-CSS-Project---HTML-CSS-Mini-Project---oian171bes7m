const menu = document.querySelector('#menu')
let menuAction = document.querySelector('.menuAction')

const btn = document.querySelectorAll('body')

console.log(menuAction);

var counter = 1;

function menuSlide() {
    if (counter % 2 == 1) {
        counter++;
        menuAction.style.marginLeft = " 0vw ";
        console.log(menuAction.style.marginLeft);
    } else {
        menuAction.style.marginLeft = " -100vw "
        menuAction.style.transition = " 0.5s "
        counter++;
        console.log(" working ")
    }
}
