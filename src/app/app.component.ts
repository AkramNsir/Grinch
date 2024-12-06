import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'grinch';
  today = new Date();
  day = this.today.getDate();
  showModal1: boolean = false
  showModal2: boolean = false
  showModal3: boolean = false

  ChrismasSpiritaudio = new Audio('../assets/chrismasspirit.mp3');
  jingleBellsAudio = new Audio('../assets/jinglebells.mp3');
  grinchAudio = new Audio('../assets/grinch.mp3');


  ngOnInit() {
    this.playGrinchAudio();
  }

  openModal1() {
    this.showModal1 = true;
    this.ChrismasSpiritaudio.play();
    this.grinchAudio.pause();
    this.grinchAudio.currentTime = 0;
  }

  closeModal1(){
    this.showModal1 = false;
    this.ChrismasSpiritaudio.pause();  
    this.ChrismasSpiritaudio.currentTime = 0;
  }

  openModal2() {
    this.showModal2 = true;
    this.grinchAudio.pause();
    this.grinchAudio.currentTime = 0;
  }

  closeModal2(){
    this.showModal2 = false;
  }

  openModal3() {
    this.showModal3 = true;
    this.jingleBellsAudio.play();
    this.grinchAudio.pause();
    this.grinchAudio.currentTime = 0;
  }

  closeModal3(){
    this.showModal3 = false;
    this.jingleBellsAudio.pause();  
    this.jingleBellsAudio.currentTime = 0;
  }

  playGrinchAudio(){
    this.grinchAudio.play();
  }
}
