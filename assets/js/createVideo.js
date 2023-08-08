import { connectAPI } from "./connectAPI.js";

const form = document.querySelector("[data-form]");

async function createVideo(evento) {
    evento.preventDefault();

    const image = document.querySelector("[data-image]").value;
    const title = document.querySelector("[data-title]").value;
    const url = document.querySelector("[data-url]").value;
    const description = Math.floor(Math.random() * 10).toString();

    await connectAPI.createVideo(title, description, url, image);

    window.location.href = "../pages/videoSent.html";
};

form.addEventListener("submit", evento => createVideo(evento));
