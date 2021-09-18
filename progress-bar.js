window.addEventListener('load', () => {
    const progress = document.getElementById('progress');
    requestAnimationFrame(update);
})

function update() {
    progress.style.width = `${((window.scrolly)/(document.body.scrollHeight - window.innerHeight))}`
    requestAnimationFrame(update);
}