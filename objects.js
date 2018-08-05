var playlist = {Yui : "again"}

function updatePlaylist(playlist, artist, song){
  this.playlist[artist] = song;
  return this.playlist;
}

function removeFromPlaylist(playlist, artist){
  delete this.playlist[artist];
  return this.playlist;
}