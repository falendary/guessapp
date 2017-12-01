import {Component, OnInit} from '@angular/core';
import {AttemptService} from "../../services/attempt.service";

@Component({
  selector: 'home',
  providers: [AttemptService],
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  public attempts: number = 3;
  public playerGuess: number = null;

  public status: string = '';

  public min: number = 1;
  public max: number = 4;

  public numberToGuess: number;

  public random(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  constructor(private attemptService: AttemptService) {

  }

  public guess(): void {

    if (this.numberToGuess == this.playerGuess) {
      this.status = 'win';
    } else {

      this.attempts = this.attempts - 1;

      if (this.attempts == 0 ) {
        this.status = 'lose';
      }

    }

    let data = {
      numberToGuess: this.numberToGuess,
      playerGuess: this.playerGuess,
      min: this.min,
      max: this.max,
      attempts_left: this.attempts
    };

    this.attemptService.guess(data);

  }

  public startNewGame(): void {

    this.playerGuess = null;
    this.status = '';
    this.attempts = 3;

    this.numberToGuess = this.random(this.min, this.max);

  }

  ngOnInit() {

    this.startNewGame();

  }


}
