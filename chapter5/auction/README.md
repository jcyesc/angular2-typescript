# Hands-on: Filtering products in the online auction

This project will use `chapter4/auction` as a reference. We will install all the libraries
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

In this exercise, we'll use observable event streams to filter featured products on the
home page of the online auction. An auction (or any online store) may display many products,
which complicates finding a specific product.

This is a good use case for applying reactive observable event streams. The user types
a letter, which emits the next element of the stream that represents the current content
of the search field. The subscriber of this stream provides immediate filtering and
re-rendering of the products on the UI. In this scenario, we won't make any request to the
server.
