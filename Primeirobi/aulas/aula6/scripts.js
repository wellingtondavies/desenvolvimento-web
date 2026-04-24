document.addEventListener("DOMContentLoaded", () => {
    const ulParent = document.querySelector(".ul-parent");

    ulParent.addEventListener("click", handleClickUl);
})

function handleClickUl(evento) {
    if (evento.target.tagName == "LI") {
        evento.target.style = "text-decoration: line-through red";   
    }
}

function handleClick() {
    const title = document.querySelector(".title");
    const container = document.querySelector(".container");

    console.log(title);
    console.log(title.textContent);

    title.textContent = "Outro valor de título"
    // Adicionando elementos html a tag atual
    // title.innerHTML = "<h1>Teste show</h1><p>Texto abaixo</p>"

    // title.parentElement.classList.toggle("dark-mode");

    const pharagraph = document.createElement("p");
    pharagraph.textContent = "Apenas um texto aleatório";

    container.appendChild(pharagraph);

    title.addEventListener("click", () => {
        title.textContent = "Cliquei no title!"

        pharagraph.style = "color: red";
    });
}

function handleSend(event) {
    event.preventDefault();
    const ulParent = document.querySelector(".ul-parent");

    const newLi = document.createElement("li");
    newLi.textContent = event.target[0].value;

    ulParent.appendChild(newLi);
}
