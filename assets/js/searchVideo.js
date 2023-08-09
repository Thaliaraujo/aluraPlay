import { connectAPI } from "./connectAPI.js";

async function searchVideo(evento) {
    evento.preventDefault();

    const researchData = document.querySelector("[data-search]").value;
    const search = await connectAPI.searchVideo(researchData);

    console.log(search);
};

const searchButton = document.querySelector("[data-button-search]");
searchButton.addEventListener("click", evento => searchVideo(evento));
