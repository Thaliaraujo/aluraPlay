import { connectAPI } from "./connectAPI.js";
import createCard  from "./showVideos.js";

async function searchVideo(evento) {
    evento.preventDefault();

    const researchData = document.querySelector("[data-search]").value;
    const search = await connectAPI.searchVideo(researchData);
    
    const list = document.querySelector("[data-list]");

    while(list.firstChild) {
        list.removeChild(list.firstChild);
    };
    
    search.forEach(elemento => list.appendChild(createCard(elemento.title, elemento.description, elemento.url, elemento.image)));

    if(search.length == 0) {
        list.innerHTML = `<h2 class="message__title">Não existem vídeos com esse termo</h2>`
    };
};

const searchButton = document.querySelector("[data-button-search]");
searchButton.addEventListener("click", evento => searchVideo(evento));
