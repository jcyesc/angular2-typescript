# Basic routing example

This example shows how to create two links that displays different components in one
outlet. This mini-app uses Hash-based navigation.

## Getting started with navigation

This project will use `angular-seed` as a reference. 

To install all the angular libraries use:

```shell
npm install
```

Make sure to add the following packages in `systemjs.config.js`:

- @angular/http
- @angular/router
- @angular/forms

After adding the packages, run the application


```shell
npm start
```

## Topics covered

This mini-app covers the following things:

- Basic configuration of Routing using Hash-based Navigation
- Using anchors to navigate to other pages
- Programmatically navigate to other pages
- Passing data to routes
    - Extracting parameters from ActivatedRoute
    - Passing static data to a route
- Child routes
- Types of ViewEncapsulation
    1. ViewEncapsulation.Emulated (default)
    2. ViewEncapsulation.Native
    3. ViewEncapsulation.None
- Handling 404 errors
- Guarding routes
- Resolve interface
- Splitting an app into modules 




