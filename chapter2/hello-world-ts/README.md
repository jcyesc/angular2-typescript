# Hello World TypeScript

The code of the Angular framework consists of modules (one file per module), which
are combined into libraries, which are logically grouped into packages, such as
@angular/core, @angular/common and so on.

In this mini app we will have two files:

1. index.html
2. main.ts

The index.html will do the following things:

1. Load the required Angular scripts.
2. Load the TypeScript compiler
3. Load the SystemJS module loader.

The code in this folder loads these scripts from `unpkg.com` content delivery 
network (CDN).

## Content delivery networks (CDNs)

`unpkg` (https://unpkg.com) is a CDN for packages published to the npm (https://www.npmjs.com/)
package manager's registry. Check npmjs.com to find the latest version of a particular
package. If you want to see which other versions of the package are available, run the
following command:

```shell
npm info packagename
```

## Execute the http server

First install `live-server`:

```shell
npm install live-server -g
```

In order to run the application, run the following command where the index.html file is:

```shell
live-server
```

## Note

The first version of the book uses `SystemJS` which it is deprecated. The second version
of the book uses `Angular CLI`. More information in the link below:

https://github.com/Farata/angular2typescript


