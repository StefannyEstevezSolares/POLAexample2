const abrirBtn = document.getElementById("abrirBtn");

abrirBtn.addEventListener("mouseenter", function() {

    const maxX = window.innerWidth - abrirBtn.offsetWidth;
    const maxY = window.innerHeight - abrirBtn.offsetHeight;

    const nuevaX = Math.random() * maxX;
    const nuevaY = Math.random() * maxY;

    abrirBtn.style.left = nuevaX + "px";
    abrirBtn.style.top = nuevaY + "px";

    abrirBtn.style.transform = "none";

});