// audioPlayer.js

let audioPlayer = new Audio(); // Main audio player for recordings
let bgMusic = new Audio("whispering.mp3"); // Background music
let seekSlider = document.getElementById("seekSlider");
let currentTimeDisplay = document.getElementById("currentTime");
let totalTimeDisplay = document.getElementById("totalTime");
let seekContainer = document.getElementById("seekContainer");
let isPaused = false;

// Audio file paths (Modify these with your actual file names)
const audioFiles = {
    addition: "lessons/frying.mp3",
    subtraction: "lessons/drawing.mp3",
    multiplication: "audio/multiplication.mp3",
    division: "audio/division.mp3"
};

// Function to play a selected topic with smooth transitions
function playTopicAudio(topicKey) {
    if (!audioFiles[topicKey]) {
        console.error("Audio file not found for:", topicKey);
        return;
    }

    // Ensure correct audio file is loaded and reset playback
    audioPlayer.src = audioFiles[topicKey];
    audioPlayer.load(); // Force reload to prevent mute issues
    audioPlayer.volume = 1; // Ensure main audio is at full volume

    isPaused = false;
    seekContainer.style.display = "block";

    // Start background music louder and play
    bgMusic.volume = 0.7;
    bgMusic.play();

    // Ensure the main audio starts correctly after 5 seconds
    setTimeout(() => {
        audioPlayer.play().catch(error => console.error("Audio play error:", error));
        fadeBackgroundMusic(0.1, 2000); // Fade background music down over 2 seconds

        // Update slider and display
        seekSlider.max = audioPlayer.duration;

        audioPlayer.ontimeupdate = () => {
            seekSlider.value = audioPlayer.currentTime;
            currentTimeDisplay.innerText = formatTime(audioPlayer.currentTime);
        };

        audioPlayer.onloadedmetadata = () => {
            totalTimeDisplay.innerText = formatTime(audioPlayer.duration);
        };

        // When the main audio ends, increase background music, play for 5s, then fade out
        audioPlayer.onended = () => {
            fadeBackgroundMusic(0.5, 2000, () => {
                setTimeout(() => {
                    fadeBackgroundMusic(0, 2000, () => {
                        bgMusic.pause();
                        bgMusic.currentTime = 0;
                    });
                }, 5000); // Play at higher volume for 5 seconds before fading out
            });
            seekContainer.style.display = "none";
        };

    }, 5000); // 5-second delay before the main audio starts
}

// Function to pause both audio and music
function pauseAudio() {
    if (!audioPlayer.paused) {
        audioPlayer.pause();
        bgMusic.pause();
        isPaused = true;
    }
}

// Function to resume both audio and music
function resumeAudio() {
    if (isPaused) {
        audioPlayer.play().catch(error => console.error("Resume audio error:", error));
        bgMusic.play();
        isPaused = false;
    }
}

// Function to fade background music smoothly
function fadeBackgroundMusic(targetVolume, duration, callback = null) {
    let fadeInterval = setInterval(() => {
        if (Math.abs(bgMusic.volume - targetVolume) < 0.01) {
            bgMusic.volume = targetVolume;
            clearInterval(fadeInterval);
            if (callback) callback();
        } else {
            bgMusic.volume += (bgMusic.volume < targetVolume ? 0.05 : -0.05); // Adjust volume in small steps
        }
    }, duration / 20);
}

// Seek functionality
seekSlider.oninput = () => {
    audioPlayer.currentTime = seekSlider.value;
};

// Format time helper (mm:ss)
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
}