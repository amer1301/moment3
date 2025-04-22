import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-convert',
  imports: [FormsModule],
  templateUrl: './convert.component.html',
  styleUrl: './convert.component.css'
})
export class ConvertComponent {
  // Properties
num1: number = 2;
num2: number = 3;
result: number = 0;

// Methods
add(): void {
  this.result = this.num1 + this.num2;
}

subtract(): void {
  this.result = this.num1 - this.num2;
}

multiply(): void {
  this.result = this.num1 * this.num2;
}

divide(): void {
  this.result = this.num1 / this.num2;
}
}
