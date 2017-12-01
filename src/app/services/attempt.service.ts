import {Injectable} from '@angular/core';
import {GuessData} from '../models/data.model';
import {Http} from '@angular/http';

@Injectable()
export class AttemptService {

  constructor(private http: Http){

  }

  public guess(data: GuessData): void {

    this.http.post('/api/guess', data);

  }

}
