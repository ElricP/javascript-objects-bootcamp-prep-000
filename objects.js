Object.assign(playlist)

function updatePlaylist(playlist, artist, song){
  playlist.artist = song;
  return playlist;
}

function remove