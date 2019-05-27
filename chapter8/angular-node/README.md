# Chapter 8 - Creating a web server with Node and TypeScript

## Set up

To create the project, let's run the following :

```shell
npm init -y
```

The -y option instructs npm to create the package.json configuration file with default
settings, without prompting you for any options.

After creating the package.json, we must install the `tsc` compiler:

```shell
npm install -g typescript
```

Then, install the `node` type definitions:

```shell
npm i @types/node --save
```

Before running the compiler, make sure that there is a `tsconfig.json` file with the 
compiler configurations. Then run the compiler:

```shell
npm run tsc
```

The compile files are generated inside the `build` folder.


## Hello World Server

In the file `server/hello_server.ts` is the code to create and start and http server using
node.

To compile the file and start the server run the following commands

```shell
npm run tsc
node build/hello_server.js
```

To see the response go to http://localhost:8000/


## Hello Express web server

In the file `server/my-express-server.ts` is the code that create and start the Express server.

To compile the file and start the server run the following commands

```shell
npm run tsc
node build/my-express-server.js
```

In a browser try the following URLs:

- http://127.0.0.1:8000/
- http://127.0.0.1:8000/products
- http://127.0.0.1:8000/reviews

## Nodemon

`Nodemon` is a Node utility. Nodemon will monitor for any changes in the source and when
it detects changes, will automatically restart the server and reload the code.

To install Nodemon, run the following command

```shell
npm install -g nodemon
```

To run `my-express-server.js`, run the command:

```shell
nodemon build/my-express-server.js
```

After configuring the `scripts` section in packege.json, we can start the server wih

```shell
npm start
```

or

```shell
npm run dev
```

## RESTful API for serving products

The file `auction-rest-server.ts` defines the RESTful API for serving products. To compile
and run the server, execute the following commands:


```shell
npm run tsc
nodemon build/auction-rest-server.js
```

In a browser try the following URLs:

- http://127.0.0.1:8000/
- http://127.0.0.1:8000/products
- http://127.0.0.1:8000/products/1


## Building Angular and Node together

A typical web application deployed on the server includes static resources (such as
HTML, images, CSS, and JavaScript code) that have to be loaded in the browser when the
user enters the application's URL.

From Node's perspective, the Angular portion of this applciation is considred static
resources. Because Angular apss load dependencies from node_modules, this directory also
belongs to the static resources requried by the browser.

The Express framework has a special API to specify the directories with static resources.
We use the file `auction-rest-server-angular.ts` to configure the static resources.

```shell
npm run tsc
npm run restServer
```

The configuration in `tsconfig.json` excludes the `client` and `node_modules` folders from
compiling.


## WebSockets - Hello world

WebSocket is a low-overhead binary protocol supported by all modern web browsers. With
request-based HTTP, a client sends a request over a connection and waits for a response
to come back (half-duplex). On the other hand, the WebSocket protocol allows data to travel
in both directions simultaneously (full-duplex) over th same connection.

```shell
npm run tsc
npm run simpleWsServer
```

The rule `simpleWsServer` is in the `package.json` file.

This application (simple-websocket-server.ts) creates two servers. The HTTP server will
run on port 8000 and will be responsible for sending the initial HTML file to the client.
The WebSocket server will run on port 8085 and will communicate with all connected clients
through this port.


## WebSockets and Angular - Using Observables

This section creates and Angular application with a WebSocket service (on the client)
that interacts with the Node WebSocket server. The server-side can be implemented with
any technology that supports WebSockets.

```shell
npm run tsc
npm run twowayWsServer
```


## More information

For more information, check the [github website](https://github.com/Farata/angular2typescript/blob/master/chapter8/http_websocket_samples/package.json)





























