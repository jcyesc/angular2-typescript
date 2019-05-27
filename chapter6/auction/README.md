# Hands-on: Filtering products in the online auction

This project will use `chapter5/auction` as a reference. We will install all the libraries
including bootstrap and jquery.

To install all the angular libraries use:

```shell
npm install
```

Make sure to install the type-definition file for Array.fill

```shell
npm install @types/es6-shim --save-dev
```

To run the project execute:

```shell
npm start
```



## Goals

In this section, you'll add a rating feature to the auction. Previous versions of this
application just displayed the rating, but now you want to let users rate a product. In
chapter 4, we created the Produce Details view; here we'll add the Leave a Review
button, which allows users to navigate to a view where they can assign one to five
stars to a product and enter a review.

