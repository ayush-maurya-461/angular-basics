import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayingMusicService {

  musicPlaying = {
    name: 'music 1',
    artist: 'Aladdin',
    image: '../..',
    genre: 'Pop',
    released: '2021-01-01',
  }

  constructor() { }

  getPlayingMusic(){
    return this.musicPlaying;
  }
}
