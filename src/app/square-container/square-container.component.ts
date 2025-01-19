import { CommonModule, NgComponentOutlet, NgTemplateOutlet } from '@angular/common';
import { Component, EventEmitter, inject, Input, OnChanges, Output, SimpleChanges, TemplateRef } from '@angular/core';
import { Square } from '../db_square';
import { SquareServiceService } from '../square.service';

@Component({
  selector: 'app-square-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './square-container.component.html',
  styleUrl: './square-container.component.scss'
})
export class SquareContainerComponent implements OnChanges{

  @Input() dynamicSquareContent!: TemplateRef<any>;
  @Input() data!: Square;
  @Output() flippedSquare = new EventEmitter<Square>();
  squareService = inject(SquareServiceService);
  square!: Square;
 
  ngOnChanges(changes: SimpleChanges){
    console.log(changes)
  }

  clickSquare(square: Square) {
    if(!square.done){
      if(!square.fliped) {
        square.fliped = !square.fliped;
        this.flippedSquare.emit(square);
      }
    }
  }

  getColor(value: Square){
    return (value.fliped) ? value.imgF : value.imgB;
  }
}
