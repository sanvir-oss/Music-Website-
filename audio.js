// Popup player logic
const popup = document.getElementById('playerPopup');
const popupAudio = document.getElementById('popupAudio');
const popupImage = document.getElementById('popupImage');
const popupTitle = document.getElementById('popupTitle');
const closeBtn = document.querySelector('.close-btn');

const songItems = document.querySelectorAll('.trending-songs');

if (songItems.length > 0) {
    songItems.forEach(item => {
        item.addEventListener('click', () => {
            const audioSrc = item.getAttribute('data-src');
            const songTitle = item.querySelector('h4').textContent;
            const songImage = item.querySelector('img').src;

            // Set popup content
            popupTitle.textContent = songTitle;
            popupImage.src = songImage;
            popupAudio.src = audioSrc;

            // Show popup
            popup.style.display = 'flex';
            popupAudio.play();
        });
    });

    // Close button
    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
        popupAudio.pause();
    });

    // Closing popup when clicking outside
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.style.display = 'none';
            popupAudio.pause();
        }
    });
}



//welcome message after logging in 


window.addEventListener("DOMContentLoaded", () => {
    const username = localStorage.getItem("logedinuser");
    const usernameDiv = document.getElementById("loggedinusername");

    if (username && usernameDiv) {
        usernameDiv.textContent = `Welcome to BeatBay - ${username}!`;
    } 



    // Handling sidebar downloads button click
    document.querySelectorAll(".aa").forEach((btn) => {
            btn.addEventListener("click", () => {
                const label = btn.querySelector("p")?.innerText.trim();
                const loggedUser = localStorage.getItem("logedinuser");

                if (label === "Downloads") {
                    if (!loggedUser) {
                        alert("You have not logged in! Please login first to access your downloads.");
                        return;
                    }
                    window.location.href = "downloads.html";

                }

                if(label==="Home"){
                    window.location.href="home.html";
                }

            });
        });



            const loggedUser = localStorage.getItem("logedinuser");
            const authContainer = document.querySelector(".header-options-a");

            if (loggedUser) {
            authContainer.innerHTML = `<a href="#" id="logoutBtn">Logout </a>`;
            document.getElementById("logoutBtn").addEventListener("click", (e) => {
                e.preventDefault();
                localStorage.removeItem("logedinuser");
                alert("You have been logged out.");
                window.location.reload();
            });
            }





        document.addEventListener("click", (e) => {
            if (e.target.classList.contains("download-btn")) {
                const loggedUser = localStorage.getItem("logedinuser");
                if (!loggedUser) {
                    alert("Please login first to download songs!");
                    return;
                }

                const songCard = e.target.closest(".popup-content");
                const title = songCard.querySelector(".song-title").innerText;
                const image = songCard.querySelector("img").src;
                const audio = songCard.querySelector("audio").src;

                const storageKey = `downloadedSongs_${loggedUser}`;
                let downloads = JSON.parse(localStorage.getItem(storageKey)) || [];

                if (downloads.some(song => song.title === title)) {
                    alert("This song is already in your downloads.");
                    return;
                }

                const payed=confirm("Pay $5 to download this song ")
                if(!payed){
                    alert("Download cancelled. Payment not completed")
                    return;
                }

                downloads.push({ title, image, audio });
                localStorage.setItem(storageKey, JSON.stringify(downloads));
                alert(`"${title}" has been added to your downloads!`);
            }
        });









});












