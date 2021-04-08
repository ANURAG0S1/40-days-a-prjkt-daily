
//with animations

function loog() {
    if (window.scrollY > 400) {
        document.querySelector('nav.scroll').style.transform = 'translateY(100%)'

    } else {
        document.querySelector('nav.scroll').style.transform = 'translateY(-200%)'

    }
}




//without animations
// function loog() {
//     if (window.scrollY > 400) {
//         // document.querySelector('nav.scroll').style.display = 'block'


//     } else {
//         // document.querySelector('nav.scroll').style.display = 'none'
//     }
// }
