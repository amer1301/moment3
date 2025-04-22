import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-convert',
  imports: [FormsModule],
  templateUrl: './convert.component.html',
  styleUrl: './convert.component.css'
})
export class ConvertComponent {
  // Meter till feet
  meters: number = 0;
  feet: number = 0;

  convertToFeet() {
    this.feet = this.meters * 3.28084;
  }

  convertToMeters() {
    this.meters = this.feet / 3.28084;
  }

// Celcius till Fahrenheit
celsius: number = 0;
fahrenheit: number = 0;

convertToFahrenheit() {
  this.fahrenheit = (this.celsius * 9/5) + 32;
}

convertToCelsius() {
  this.celsius = (this.fahrenheit - 32) * 5/9;
}
}
