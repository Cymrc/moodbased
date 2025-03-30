const moodPlaylists = {
    happy: "https://www.youtube.com/watch?v=ALd-gTnflRg",
    sad: "https://www.youtube.com/watch?v=Jy-dLvnJaw8",
    energetic: "https://www.youtube.com/watch?v=y5arQ1fqQ1w&t=97s",
    nostalgic: "https://www.youtube.com/watch?v=al3QxxwYYFA&t=1212s"
};

function fetchPlaylist() {
    const mood = document.getElementById("mood").value;
    const playlistDiv = document.getElementById("playlist");

    // Clear previous content and add a fade-in effect
    playlistDiv.innerHTML = "";
    playlistDiv.style.opacity = "0";

    setTimeout(() => {
        playlistDiv.innerHTML = `
            <p><strong>Here's a playlist for your mood:</strong></p>
            <a href="${moodPlaylists[mood]}" target="_blank" class="playlist-link">
                🎵 Open Playlist 🎵
            </a>
        `;
        playlistDiv.style.opacity = "1";
    }, 200);
}
