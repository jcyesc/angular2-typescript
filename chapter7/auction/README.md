# Hands-on: Adding validation to the search form

This project will use `chapter6/auction` as a reference. We will install all the libraries
including bootstrap and jquery.

To install all the angular libraries use:

```shell
npm install
```

To run the project execute:

```shell
npm start
```

## Goals

In this section we'll perform the following steps:

1. Add a new method to the `ProductService` class that returns an array of all available
product categories.
2. Create a model representing the search form using `FormBuilder`.
3. Configure validation rules for the model.
4. Refactor the template to properly bind to the model created in the previous step.
5. Implement `onSearch()` method to handle the form's submit event.
