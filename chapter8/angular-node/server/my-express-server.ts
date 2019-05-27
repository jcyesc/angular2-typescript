import * as express from "express";

/**
 * Create a RESTfull webservice using Express.
 */
const app = express();

app.get('/', (req, res) => res.send('Hello from Express'));

app.get('/products', (req, res) => res.send('Got a request for products'));

app.get('/reviews', (req, res) => res.send('Got a request for reviews'));

const server = app.listen(8000, "localhost", () => {

    const {address, port} = server.address();

    console.log('Listening on %s %s', address, port);
});