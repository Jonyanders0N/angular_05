import { Injectable } from '@angular/core';
import { arr_square, Square } from './db_square';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SquareServiceService {

  // squareList = new BehaviorSubject<Square[]>(arr_square);

  squares: Square[] = [...arr_square];

  checkSquare(value: Square[]){
    // this.squareList.next(value);
  }
}
