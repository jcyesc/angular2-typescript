# Creating an Angular project using NPM

This mini app creates an skeleton of an angular application using npm.

The command to create a project is:

```shell
npm init -y
```

Because we are not going to publish it into the npm registry, we remove all of the
properties except name, description, and scripts.

The previous command creates a `package.json` file that contains configuration about the
project. In order to run the scripts defined in `package.json` execute the following command:

```shell
npm run start
``` 

Or the shorter version

```shell
npm start
```

After updating the libraries in `package.json`, run the following command:

```shell
npm install
```

## Basic set up for an Angular App managed by NPM

In order to build the skeleton of an Angular App, we need at least the following files:


```shell
angular-seed
    index.html
    package.json
    systemjs.config.ts
    tsconfig.json
    app
        app.component.ts
        app.module.ts
        main.ts
```

The files are describe below:

- `index.html`: Contains the root component and the libraries that will compile the TS files.
- `package.json`: Contains the description of the dependencies and the name of the Angular application. It also contains the scripts to be invoked by npm.
- `systemjs.config.ts`: Contains the configuration for SystemJS. In this file we also map 
the modules to their locations. On top of this, we also indicate what it is the main script in the packages. 
- `tsconfig.json`: Contains the configuration used by the TypeScript compiler.
- `app`: Directory that contains the root component and its module.
    - `app.component.ts`: Defines the root component
    - `app.module.ts`: Defines the module
    - `main.ts`: Bootstrap the module.







