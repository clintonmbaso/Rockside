class MusicPlayer {
  constructor() {
    this.playerElement = document.getElementById('music-player');
    this.audio = new Audio();
    this.playlists = {};
    this.currentPlaylist = 'default';
    this.currentTrackIndex = 0;
    this.isPlaying = false;
    
    // Initialize default playlist if none exists
    if (!localStorage.getItem('musicPlayerPlaylists')) {
      this.playlists = {
        'default': {
          name: 'Default Playlist',
          tracks: []
        }
      };
      this.savePlaylists();
    } else {
      this.loadPlaylists();
    }
    
    this.initElements();
    this.initEvents();
    this.restorePlayerState();
    
    // Make player draggable
    this.makeDraggable();
  }
  
  initElements() {
    // Player controls
    this.playBtn = document.getElementById('play-btn');
    this.prevBtn = document.getElementById('prev-btn');
    this.nextBtn = document.getElementById('next-btn');
    this.volumeBtn = document.getElementById('volume-btn');
    this.volumeControl = document.getElementById('volume-control');
    this.progressBar = document.getElementById('progress-bar');
    this.currentTimeDisplay = document.getElementById('current-time');
    this.durationDisplay = document.getElementById('duration');
    this.minimizeBtn = document.getElementById('minimize-btn');
    
    // Track info
    this.trackTitle = document.getElementById('track-title');
    this.trackArtist = document.getElementById('track-artist');
    this.albumArt = document.getElementById('album-art');
    
    // Playlist elements
    this.playlistBtn = document.getElementById('playlist-btn');
    this.playlistContainer = document.querySelector('.playlist-container');
    this.playlistList = document.getElementById('playlist-list');
    this.currentPlaylistName = document.getElementById('current-playlist-name');
    this.currentTracksList = document.getElementById('current-tracks');
    this.newPlaylistBtn = document.getElementById('new-playlist-btn');
  }
  
  initEvents() {
    // Player controls
    this.playBtn.addEventListener('click', () => this.togglePlay());
    this.prevBtn.addEventListener('click', () => this.prevTrack());
    this.nextBtn.addEventListener('click', () => this.nextTrack());
    this.volumeBtn.addEventListener('click', () => this.toggleMute());
    this.volumeControl.addEventListener('input', () => this.setVolume());
    this.progressBar.addEventListener('input', () => this.seek());
    this.minimizeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggleMinimize();
    });
    
    // Player container click
    this.playerElement.addEventListener('click', (e) => {
      if (this.playerElement.classList.contains('minimized') && e.target === this.playerElement) {
        this.toggleMinimize();
      }
    });
    
    // Playlist controls
    this.playlistBtn.addEventListener('click', () => this.togglePlaylist());
    this.newPlaylistBtn.addEventListener('click', () => this.createNewPlaylist());
    
    // Audio events
    this.audio.addEventListener('timeupdate', () => this.updateProgress());
    this.audio.addEventListener('ended', () => this.nextTrack());
    this.audio.addEventListener('loadedmetadata', () => this.updateDuration());
    
    // Persist player state before unload
    window.addEventListener('beforeunload', () => this.savePlayerState());
  }
  
  // Core player functionality
  togglePlay() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }
  
  play() {
    if (this.playlists[this.currentPlaylist].tracks.length === 0) return;
    
    const currentTrack = this.playlists[this.currentPlaylist].tracks[this.currentTrackIndex];
    if (this.audio.src !== currentTrack.url) {
      this.audio.src = currentTrack.url;
      this.updateTrackInfo(currentTrack);
    }
    
    this.audio.play()
      .then(() => {
        this.isPlaying = true;
        this.playBtn.textContent = '⏸';
        this.updateActiveTrackInPlaylist();
      })
      .catch(error => {
        console.error('Playback failed:', error);
      });
  }
  
  pause() {
    this.audio.pause();
    this.isPlaying = false;
    this.playBtn.textContent = '▶';
  }
  
  prevTrack() {
    if (this.playlists[this.currentPlaylist].tracks.length === 0) return;
    
    this.currentTrackIndex--;
    if (this.currentTrackIndex < 0) {
      this.currentTrackIndex = this.playlists[this.currentPlaylist].tracks.length - 1;
    }
    this.play();
  }
  
  nextTrack() {
    if (this.playlists[this.currentPlaylist].tracks.length === 0) return;
    
    this.currentTrackIndex++;
    if (this.currentTrackIndex >= this.playlists[this.currentPlaylist].tracks.length) {
      this.currentTrackIndex = 0;
    }
    this.play();
  }
  
  toggleMute() {
    this.audio.muted = !this.audio.muted;
    this.volumeBtn.textContent = this.audio.muted ? '🔇' : '🔊';
  }
  
  setVolume() {
    this.audio.volume = this.volumeControl.value;
    this.volumeBtn.textContent = this.audio.volume == 0 ? '🔇' : '🔊';
  }
  
  seek() {
    const seekTime = (this.progressBar.value / 100) * this.audio.duration;
    this.audio.currentTime = seekTime;
  }
  
  updateProgress() {
    const progress = (this.audio.currentTime / this.audio.duration) * 100;
    this.progressBar.value = progress || 0;
    this.currentTimeDisplay.textContent = this.formatTime(this.audio.currentTime);
  }
  
  updateDuration() {
    this.durationDisplay.textContent = this.formatTime(this.audio.duration);
    this.progressBar.max = this.audio.duration;
  }
  
  formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }
  
  // Playlist management
  togglePlaylist() {
    if (this.playerElement.classList.contains('minimized')) {
      this.playerElement.classList.remove('minimized');
    }
    this.playlistContainer.classList.toggle('hidden');
    if (!this.playlistContainer.classList.contains('hidden')) {
      this.renderPlaylists();
    }
  }
  
  renderPlaylists() {
    this.playlistList.innerHTML = '';
    this.currentTracksList.innerHTML = '';
    
    // Render all playlists
    Object.keys(this.playlists).forEach(playlistId => {
      const playlist = this.playlists[playlistId];
      const li = document.createElement('li');
      li.textContent = playlist.name;
      li.dataset.playlistId = playlistId;
      if (playlistId === this.currentPlaylist) {
        li.classList.add('active');
      }
      li.addEventListener('click', () => this.switchPlaylist(playlistId));
      this.playlistList.appendChild(li);
    });
    
    // Render current playlist tracks
    this.currentPlaylistName.textContent = this.playlists[this.currentPlaylist].name;
    this.playlists[this.currentPlaylist].tracks.forEach((track, index) => {
      const li = document.createElement('li');
      li.textContent = `${track.title} - ${track.artist}`;
      li.dataset.trackIndex = index;
      if (index === this.currentTrackIndex && this.isPlaying) {
        li.classList.add('playing');
      }
      li.addEventListener('click', () => {
        this.currentTrackIndex = index;
        this.play();
      });
      this.currentTracksList.appendChild(li);
    });
  }
  
  switchPlaylist(playlistId) {
    this.currentPlaylist = playlistId;
    this.currentTrackIndex = 0;
    this.renderPlaylists();
    this.savePlayerState();
    if (this.isPlaying) {
      this.play();
    }
  }
  
  createNewPlaylist() {
    const playlistName = prompt('Enter playlist name:');
    if (playlistName) {
      const playlistId = 'playlist-' + Date.now();
      this.playlists[playlistId] = {
        name: playlistName,
        tracks: []
      };
      this.savePlaylists();
      this.renderPlaylists();
    }
  }
  
  addTrackToPlaylist(playlistId, track) {
    if (this.playlists[playlistId]) {
      this.playlists[playlistId].tracks.push(track);
      this.savePlaylists();
      if (playlistId === this.currentPlaylist) {
        this.renderPlaylists();
      }
    }
  }
  
  // UI controls
  toggleMinimize() {
    this.playerElement.classList.toggle('minimized');
    if (!this.playerElement.classList.contains('minimized')) {
      this.playlistContainer.classList.add('hidden');
    }
  }
  
  makeDraggable() {
    let isDragging = false;
    let offsetX, offsetY;
    
    this.playerElement.addEventListener('mousedown', (e) => {
      if (e.target !== this.playerElement && !this.playerElement.classList.contains('minimized')) return;
      
      isDragging = true;
      offsetX = e.clientX - this.playerElement.getBoundingClientRect().left;
      offsetY = e.clientY - this.playerElement.getBoundingClientRect().top;
      this.playerElement.style.cursor = 'grabbing';
    });
    
    document.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      
      this.playerElement.style.left = `${e.clientX - offsetX}px`;
      this.playerElement.style.top = `${e.clientY - offsetY}px`;
      this.playerElement.style.right = 'auto';
    });
    
    document.addEventListener('mouseup', () => {
      isDragging = false;
      this.playerElement.style.cursor = '';
      this.savePlayerPosition();
    });
  }
  
  // Track info display
  updateTrackInfo(track) {
    this.trackTitle.textContent = track.title;
    this.trackArtist.textContent = track.artist;
    this.albumArt.src = track.artwork || 'default-art.jpg';
    this.albumArt.alt = `${track.title} album art`;
  }
  
  updateActiveTrackInPlaylist() {
    const tracks = this.currentTracksList.querySelectorAll('li');
    tracks.forEach(track => track.classList.remove('playing'));
    if (tracks[this.currentTrackIndex]) {
      tracks[this.currentTrackIndex].classList.add('playing');
    }
  }
  
  // Persistence
  savePlaylists() {
    localStorage.setItem('musicPlayerPlaylists', JSON.stringify(this.playlists));
  }
  
  loadPlaylists() {
    this.playlists = JSON.parse(localStorage.getItem('musicPlayerPlaylists'));
  }
  
  savePlayerState() {
    const playerState = {
      currentPlaylist: this.currentPlaylist,
      currentTrackIndex: this.currentTrackIndex,
      isPlaying: this.isPlaying,
      volume: this.audio.volume,
      muted: this.audio.muted,
      currentTime: this.audio.currentTime,
      position: {
        left: this.playerElement.style.left,
        top: this.playerElement.style.top,
        right: this.playerElement.style.right
      },
      minimized: this.playerElement.classList.contains('minimized')
    };
    localStorage.setItem('musicPlayerState', JSON.stringify(playerState));
  }
  
  restorePlayerState() {
    const savedState = localStorage.getItem('musicPlayerState');
    if (savedState) {
      const state = JSON.parse(savedState);
      
      this.currentPlaylist = state.currentPlaylist || 'default';
      this.currentTrackIndex = state.currentTrackIndex || 0;
      
      if (state.position) {
        this.playerElement.style.left = state.position.left;
        this.playerElement.style.top = state.position.top;
        this.playerElement.style.right = state.position.right;
      }
      
      if (state.minimized) {
        this.playerElement.classList.add('minimized');
      }
      
      this.audio.volume = state.volume !== undefined ? state.volume : 0.7;
      this.volumeControl.value = this.audio.volume;
      
      if (state.muted) {
        this.audio.muted = true;
        this.volumeBtn.textContent = '🔇';
      }
      
      if (state.isPlaying && this.playlists[this.currentPlaylist].tracks.length > 0) {
        this.play();
        if (state.currentTime) {
          this.audio.currentTime = state.currentTime;
        }
      }
    }
  }
  
  savePlayerPosition() {
    const position = {
      left: this.playerElement.style.left,
      top: this.playerElement.style.top,
      right: this.playerElement.style.right
    };
    const currentState = JSON.parse(localStorage.getItem('musicPlayerState') || '{}');
    currentState.position = position;
    localStorage.setItem('musicPlayerState', JSON.stringify(currentState));
  }
  
  // Public API to add tracks
  addTrack(trackData, playlistId = 'default') {
    const track = {
      title: trackData.title || 'Unknown Track',
      artist: trackData.artist || 'Unknown Artist',
      url: trackData.url,
      artwork: trackData.artwork
    };
    
    this.addTrackToPlaylist(playlistId, track);
    
    // If this is the first track added and player isn't playing, auto-play
    if (this.playlists[this.currentPlaylist].tracks.length === 1 && !this.isPlaying) {
      this.currentTrackIndex = 0;
      this.play();
    }
  }
}

// Initialize player when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.musicPlayer = new MusicPlayer();
  
  // Tracks of adding a track (you would call this from your app)
// Add a track to the default playlist
musicPlayer.addTrack({
  title: "Introduction to Church Heritage",
  artist: "Clinton Mbaso",
  url: "https://clintonmbaso.github.io/Rockside/js/Player/audios/Church Heritage - Lesson 1 - Introduction.mp3",
  artwork: "/images/u2-beautiful-day.jpg"
});
musicPlayer.addTrack({
  title: "Introduction to Church Heritage",
  artist: "Clinton Mbaso",
  url: "./js/Player/audios/Church Heritage - Lesson 1 - Introduction.mp3",
  artwork: "/images/u2-beautiful-day.jpg"
});

// Add a track to a specific playlist
musicPlayer.addTrack({
  title: "Yellow",
  artist: "Coldplay",
  url: "/music/coldplay-yellow.mp3"
}, "playlist-12345");
    
    
    
});