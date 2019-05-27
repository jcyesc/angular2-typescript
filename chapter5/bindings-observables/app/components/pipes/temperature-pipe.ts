import { Pipe, PipeTransform } from '@angular/core';

/*
Pipes

A pipe is a template element that allows us to transform a value into a desired output.
A pipe is specified by adding the vertical bar (|) and the pipe name right after the
value to be transformed.
*/
@Pipe({ name: 'temperature' })
export class TemperaturePipe implements PipeTransform {

    /*
    Converts the temperature from Celcius to Fahrenheit and vicerversa.
    */
    transform(value: any, fromTo: string): any {

        if (!fromTo) {
            throw "Temperature pipe requires parameter FtoC or CtoF";
        }

        return (fromTo == 'FtoC') ?
            (value - 32) * 5.0 / 9.0 :  // F to C
            (value * 9.0) / 5.0 + 32;  // C to F
    }
}