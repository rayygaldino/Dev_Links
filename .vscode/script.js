function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")

    // pegar a tag img
    const img = document.querySelector("#profile img")

    // substituir a imagem
    if (html.classList.contains("light")) {

        // se tiver light mode, manter a imagem light
        img.setAttribute("src", "./assets/avatar-light.png")
        img.setAttribute("alt", "Rayane Prado sorrindo com blazer azul.");

    } else {
        // se tiver sem light mode, manter a imagem normal
        img.setAttribute("src", "./assets/avatar.png")
        img.setAttribute("alt", "Rayane Prado sorrindo com regata bege com fundo verde.");
    }
}
