import { Component } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.css'
})
export class CountdownComponent {
  targetDate: Date = new Date('2024-12-25T00:00:00');  // Set your target date here
  timeRemaining: string = '';
  private interval: any;
  readyCountdown = false

  ngOnInit(): void {
    this.startCountdown();
  }

  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  startCountdown() {
    this.interval = setInterval(() => {
      const now = new Date();
      const timeDifference = this.targetDate.getTime() - now.getTime();

      if (timeDifference <= 0) {
        clearInterval(this.interval);
        this.timeRemaining = 'Time\'s up!';
      } else {
        const days = Math.floor(timeDifference / (1000 * 3600 * 24));
        const hours = Math.floor((timeDifference % (1000 * 3600 * 24)) / (1000 * 3600));
        const minutes = Math.floor((timeDifference % (1000 * 3600)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        this.timeRemaining = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        this.readyCountdown = true
        
      }
    }, 0);
  }
}
