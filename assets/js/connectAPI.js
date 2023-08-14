async function listVideos() {
    const connection = await fetch("https://64da8814e947d30a260b5e1a.mockapi.io/videos");
    const convertedConnection = await connection.json();
    return convertedConnection;
};

async function createVideo(title, description, url, image) {
    const connect = await fetch ("https://64da8814e947d30a260b5e1a.mockapi.io/videos", {
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
    const connect = await fetch (`https://64da8814e947d30a260b5e1a.mockapi.io/videos?q=${searchTerm}`);
    const convertedConnection = connect.json();

    return convertedConnection;
};


export const connectAPI = {
    listVideos, 
    createVideo,
    searchVideo
};
