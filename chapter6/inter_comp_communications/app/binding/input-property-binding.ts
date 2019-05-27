import { Component, Input } from '@angular/core';

/**
 * Input properties
 * 
 * The input properties of a component are decorated with @Input and are used to get
 * data from the parent component.
 * 
 * How can a component intercept the moment when one of its input properties changes? A
 * simple way is to change the input property changes.
 * 
 */
@Component({
    selector: 'order-processor',
    template: `Buying {{quantity}} shares of {{stockSymbol}}`,
    styles: [`:host {background: cyan;}`]
})
export class OrderComponent {

    @Input() quantity: number;

    private _stockSymbol: string;

    @Input()
    set stockSymbol(value: string) {
        this._stockSymbol = value;
        if (this._stockSymbol != undefined) {
            console.log(`Sending a Buy order to NASDAQ: ${this.stockSymbol}   ${this.quantity}`);
        }
    }

    get stockSymbol(): string {
        return this._stockSymbol;
    }
}