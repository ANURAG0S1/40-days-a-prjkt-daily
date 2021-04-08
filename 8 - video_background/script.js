function stopNow() {
    document.querySelector('.video').pause();
    document.querySelector('.button-slider').setAttribute('onclick', 'startNow()')
    document.querySelector('.button-slider').style.transform = 'translate(0%, -100%)'

}
function startNow() {
    document.querySelector('.video').play();
    document.querySelector('.button-slider').setAttribute('onclick', 'stopNow()'),
        document.querySelector('.button-slider').style.transform = 'translate(100%, -100%)'
}