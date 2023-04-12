import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  nums_0to5 = [0, 1, 2, 3, 4, 5];

  pos = 0;
  shift = 143;

  getPos(): string {
    return `translateY(${this.pos}px)`;
  }

  goDown(): void {
    this.pos += this.shift;
  }
  goUp(): void {
    this.pos -= this.shift;
  }
}
