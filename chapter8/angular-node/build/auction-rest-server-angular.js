"use strict";
var express = require("express");
var path = require("path");
var app = express();
/**
 * Configures the Angular static resources.
 *
 * Execute the rule "restServer" in package.json.
 *
 */
app.use('/', express.static(path.join(__dirname, '..', 'client')));
app.use('/node_modules', express.static(path.join(__dirname, '..', 'node_modules')));
var Product = (function () {
    function Product(id, title, price) {
        this.id = id;
        this.title = title;
        this.price = price;
    }
    return Product;
}());
var products = [
    new Product(0, "First Product", 24.99),
    new Product(1, "Second Product", 64.99),
    new Product(2, "Third Product", 74.99)
];
function getProducts() {
    return products;
}
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/main.html'));
});
app.get('/products', function (req, res) {
    res.json(getProducts());
});
function getProductById(productId) {
    return products.find(function (p) { return p.id === productId; });
}
app.get('/products/:id', function (req, res) {
    res.json(getProductById(parseInt(req.params.id)));
});
var server = app.listen(8000, "localhost", function () {
    var _a = server.address(), address = _a.address, port = _a.port;
    console.log('Listening on %s %s', address, port);
});
