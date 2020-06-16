document.getElementById("mayo").addEventListener("click", funcBotonMayo);
document.getElementById("junio").addEventListener("click", funcBotonJunio);
document.getElementById("julio").addEventListener("click", funcBotonJulio);

function funcBotonMayo() {
    let Mayo = document.getElementById("openMayo");
    let Junio = document.getElementById("openJunio");
    let Julio = document.getElementById("openJulio");
    if (Mayo.style.display === "none") {
        Mayo.style.display = "block";
        Julio.style.display = "none";
        Junio.style.display = "none"
    } else {
        Mayo.style.display = "none";
    }
}

function funcBotonJunio() {
    let Junio = document.getElementById("openJunio");
    let Julio = document.getElementById("openJulio");
    let Mayo = document.getElementById("openMayo");
    if (Junio.style.display === "none") {
        Junio.style.display = "block";
        Mayo.style.display = "none";
        Julio.style.display = "none"

    } else {
        Junio.style.display = "block";
    }
}

function funcBotonJulio() {
    let Julio = document.getElementById("openJulio");
    let Junio = document.getElementById("openJunio");
    let Mayo = document.getElementById("openMayo");
    if (Julio.style.display === "none") {
        Julio.style.display = "block";
        Mayo.style.display = "none";
        Junio.style.display = "none"
    } else {
        Julio.style.display = "none";
    }
}