import{connectAPI} from "./connectAPI.js";

const list = document.querySelector("[data-list]");
 
export default function createCard(title, description, url, image) {
    const video = document.createElement("li");
    video.className = "videos__item";
    video.innerHTML = `<li class="videos__item">
        <iframe width="100%" height="72%" src="${url}"
        title="${title}" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
        <div class="description-video">
        <img src="${image}" alt="logo canal alura">
        <h3>${title}</h3>
        <p>${description}</p>
        </div>
        </li>`

    return video;
};

async function listVideos() {
    try{
        const listAPI = await connectAPI.listVideos();
        listAPI.forEach(elemento => list.appendChild(createCard(elemento.title, elemento.description, elemento.url, elemento.image)));
    } catch {
        list.innerHTML = `<h2 class="message__title"> Não foi possível carregar a lista de vídeos</h2>`
    }
};

listVideos();

