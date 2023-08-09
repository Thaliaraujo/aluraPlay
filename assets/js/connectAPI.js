async function listVideos() {
    const connection = await fetch("http://localhost:3000/videos");
    const convertedConnection = await connection.json();
    return convertedConnection;
};

async function createVideo(title, description, url, image) {
    const connect = await fetch ("http://localhost:3000/videos", {
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

    const convertedConnection = await connect.json();
    return convertedConnection;
};

async function searchVideo(searchTerm) {
    const connect = await fetch (`http://localhost:3000/videos?q=${searchTerm}`);
    const convertedConnection = connect.json();

    return convertedConnection;
}


export const connectAPI = {
    listVideos, 
    createVideo,
    searchVideo
};
