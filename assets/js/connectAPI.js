async function listVideos() {
    const connection = await fetch("https://github.com/Thaliaraujo/aluraPlay/blob/main/db.json");
    const convertedConnection = await connection.json();
    return convertedConnection;
};

async function createVideo(title, description, url, image) {
    const connect = await fetch ("https://github.com/Thaliaraujo/aluraPlay/blob/main/db.json", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            title: title,
            description: `${description} mil visualizações`,
            url: url,
            image: image
        })
    });

    if(!connect.ok){
        throw new error("Não foi possível enviar o vídeo");
    };

    const convertedConnection = await connect.json();
    return convertedConnection;
};


async function searchVideo(searchTerm) {
    const connect = await fetch (`https://github.com/Thaliaraujo/aluraPlay/blob/main/db.json?q=${searchTerm}`);
    const convertedConnection = connect.json();

    return convertedConnection;
};


export const connectAPI = {
    listVideos, 
    createVideo,
    searchVideo
};
