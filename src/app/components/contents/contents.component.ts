import { Component } from '@angular/core';
import { PlayingMusicService } from 'src/app/services/playing-music.service';

@Component({
  selector: 'app-contents',
  // template: `
  //   <div class="row">
  //     <div class="music" *ngFor="let music of musicList">
  //       <img [src]="music.image" />
  //       <h4>Name : {{ music.name }}</h4>
  //       <p>Artist : {{ music.artist }}</p>
  //       <p>Genre : {{ music.genre }}</p>
  //       <button>Play</button>
  //     </div>
  //   </div>
  // `,
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css'],
})
export class ContentsComponent {
  musicList: any = [
    {
      name: 'music 1',
      artist: 'Aladdin',
      image: '../..',
      genre: 'Pop',
      released: '2021-01-01',
    },
    {
      name: 'music 2',
      artist: 'Arijit',
      image: '../..',
      genre: 'Rap',
      released: '2021-01-01',
    },
    {
      name: 'music 3',
      artist: 'Atif',
      image: '../..',
      genre: 'Bollywood',
      released: '2021-01-01',
    },
    {
      name: 'music 4',
      artist: 'Shibangi',
      image: '../..',
      genre: 'Soft',
      released: '2021-01-01',
    },
  ];

  constructor(private playingMusic : PlayingMusicService){

  }


  currentlyPlayingMusic(){
    let music = this.playingMusic.getPlayingMusic();

    alert(`
      Name: ${music.name}
      Artist: ${music.artist}
      Genre: ${music.genre}
      Released: ${music.released}
     `);
  }
}
