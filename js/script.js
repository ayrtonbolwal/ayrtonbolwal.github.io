let menuButton = document.getElementById("menuButton");

menuButton.addEventListener('click', () => {
    let mobileMenu = document.getElementById("mobileMenu");
    mobileMenu.style.display = 'flex';

    let closeButton = document.getElementById("closeButton");

    closeButton.addEventListener('click', () => {
        mobileMenu.style.display = 'none';
    })
})

console.log("Hola mundo!")