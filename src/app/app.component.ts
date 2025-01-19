import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SquareContainerComponent } from './square-container/square-container.component';
import { SquareServiceService } from './square.service';
import { CommonModule } from '@angular/common';
import { Square } from './db_square';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SquareContainerComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular_05';
  squareSelected: Square[] = [];
  arrSquare!: Square[];

  squareService = inject(SquareServiceService);

  ngOnInit(){
    this.arrSquare = this.squareService.squares;
  }


  updateArr(value: Square){
    console.log(value);
    
    if(this.squareSelected.length === 2) {
      if(this.squareSelected[0].imgF === this.squareSelected[1].imgF) {
        this.squareSelected.forEach(elememt => {
          elememt.done = !elememt.done;
        })
        this.squareSelected = this.createSquareArr(value);
      } else {
        this.squareSelected.forEach(element => {
          element.fliped = false;
        });
        this.squareSelected = this.createSquareArr(value);
      }
    } else {
      this.squareSelected.push(value);
    }

    console.log(this.arrSquare)
  }

  private createSquareArr(value: Square) {
    return new Array<Square>(value);
  }
  
}
