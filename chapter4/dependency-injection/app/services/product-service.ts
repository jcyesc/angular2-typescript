// Defines the Product class and the ProductService

export class Product {
    constructor(
        public id: number,
        public title: string,
        public price: number,
        public description: string) {
    }
}

/*
Note: The @Injectable annotation isn't needed here because ProductService doesn't have
any other service injected into it, and Angular doesn't need additional metadata to inject
ProductService into components. 
 */
export class ProductService {
    constructor() {
        console.log("Creating a ProductService");
    }

    getProduct(): Product {
        return new Product(0, "iPhone 7", 249.99, "The latest iPhone 7-inch screen");
    }
}
