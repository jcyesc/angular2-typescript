import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';

export class Order {
    id: string;
    description: string;

    constructor(id:string, description:string) {
        this.id = id;
        this.description = description;
    }
}

@Injectable()
export class OrderResolve implements Resolve<Order> {
    resolve() {
        return new Order('4444555', 'Super nice TV of 82 inches');
    }
}
