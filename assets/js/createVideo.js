const form = document.querySelector("[data-form]");

function createVideo(evento) {
    evento.preventDefault();

    const image = document.querySelector("[data-image]").value;
    const title = document.querySelector("[data-title]").value;
    const url = document.querySelector("[data-url]").value;
    const description = Math.floor(Math.random() * 10).toString();
};

form.addEventListener("submit", evento => createVideo(evento));
