import { Component, Input } from '@angular/core';
import { StockMe } from './stock-me';

@Component({
    selector: 'order-me',
    template: `{{message}}`,
    styles: [':host {background: cyan;}']
})
export class OrderMeComponent {
    message: string = "Waiting for the orders ...";

    private _stockMe: StockMe;

    @Input('stock')
    set stock(value: StockMe) {
        if (value && value.bidPrice != undefined) {
            this.message = `Placed order to buy 100 shares
                          of ${value.stockSymbol} at \$${value.bidPrice.toFixed(2)}`;
            this._stockMe = value;
        }
    }

    get stock(): StockMe {
        return this._stockMe;
    }

}

