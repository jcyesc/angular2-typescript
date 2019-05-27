import { Component } from '@angular/core';

/*
Test the temperature pipe and use two-way binding to update the "temp" variable.
*/
@Component({
    selector: 'temperature-pipe-tester',
    template: `<input type='text' value="0"
              placeholder= "Enter temperature" [(ngModel)] = "temp">
              <button (click)="toggleFormat()">Toggle Format</button>
              <br>In {{targetFormat}} this temperature is {{temp | temperature: format | number:'1.1-2'}}`
})
export class TemperaturePipeTesterComponent {
    temp: number;
    toCelsius: boolean = true;
    targetFormat: string = 'Celsius';
    format: string = 'FtoC';

    toggleFormat() {

        this.toCelsius = !this.toCelsius;
        this.format = this.toCelsius ? 'FtoC' : 'CtoF';

        this.targetFormat = this.toCelsius ? 'Celsius' : 'Fahrenheit';
    }
}