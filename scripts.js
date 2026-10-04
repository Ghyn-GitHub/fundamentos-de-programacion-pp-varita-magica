const colorPalette = ["#606C38", "#283618", "#FEFAE0", "#DDA15E", "#BC6C25"]

const getRandom = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
}

const randomGifs = ["./assets/magic-1.gif", "./assets/magic-2.gif", "./assets/magic-3.gif", "./assets/magic-4.gif", "./assets/magic-5.gif", "./assets/magic-6.gif"];

document.addEventListener("click", function (event) {
    event.preventDefault();
    //console.log(event.target.tagName); // Me da el tipo de elemento al hacer click, como IMG, P, ARTICLE

    // No hace falta pero creo la const para acortar
    const tag = event.target.tagName;

    if (tag === "IMG") {
        //console.dir(event.target); // Saca todas las propiedades
        //console.log("Es una imagen");
        event.target.src = getRandom(randomGifs);
    } else if (tag === "P") {
        //console.log("Es un párrafo");
        event.target.style.color = getRandom(colorPalette);
        event.target.style.backgroundColor = getRandom(colorPalette);
    } else if (["SECTION", "ARTICLE"].includes(tag)) {
        //console.log("Es un article o section");
        event.target.style.backgroundColor = getRandom(colorPalette);
    }
})

document.addEventListener("mouseover", function (event) {
    //console.log("Entra: ", event.target.tagName);

    const tag = event.target.tagName;

    if (tag === "IMG") {
        event.target.dataset.original = event.target.src;
        event.target.src = "./assets/abracadabra.gif";
    } else if (tag === "P") {
        event.target.style.color = getRandom(colorPalette);
        event.target.style.backgroundColor = getRandom(colorPalette);
    } else if (["SECTION", "ARTICLE"].includes(tag)) {
        event.target.style.backgroundColor = getRandom(colorPalette);
    }
})

document.addEventListener("mouseout", function (event) {
    //console.log("Sale: ", event.target.tagName);

    const tag = event.target.tagName;

    if (tag === "IMG") {
        event.target.src = event.target.dataset.original;
    } else if (tag === "P") {
        event.target.style.color = "";
        event.target.style.backgroundColor = "";
        // Asignar "" Vacío devuelve el css original
    } else if (["SECTION", "ARTICLE"].includes(tag)) {
        event.target.style.backgroundColor = "";
    }
})