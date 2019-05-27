# Chapter 5 - Bindings, observables, and pipes

## Summary

The main takeaways from this chapter:

- Binding to a component's properties propagates the data in one direction: from DOM
to UI.
- Binding to events propagates actions from the UI to the component.
- Two-way binding is denoted with the [()] notation.
- We can use a structural directive, ngIf, to add nodes to and remove nodes from
the browser's DOM.
- Using observable data streams simplifies asynchronous programming. We can subscribe
to and unsubscribe from a stream as well as cancel pending requests for data.

## Binding to properties and attributes

Each HTML element is represented by a tag with attributes, and the browser creates a DOM
object with properties for each tag. The user sees DOM objects on the screen as they're
rendered by the browser. There are three main pieces existing in the browser:

- The HTML document
- The DOM object
- The rendered UI

An `HTML document` consists of elements represented by tags with attributes, which are
always strings. The browser instantiates HTML elements as DOM objects (nodes) that have
properties and are rendered on the web page as a UI. Whenever the values of the DOM nodes'
properties change, the page is re-rendered.

## Observables and Observers

An `observer` is an object that handles a data stream pushed by an `observable` function.

An `observable` is an object that stream elements from some data source (a socket, an array,
UI events) one element at a time. To be precise, an observable stream knows how to do
three things:

- Emit the next element
- Throw an error
- Send a signal that the streaming is over (that the last element has been served).

Accordingly, an `observer` object provides up to three callbacks:

- The function to handle the next element emitted by the observable
- The function to handle errors in the observable
- The function to be invoked when the stream of data finishes

Using observable data streams simplifies asynchronous programming. We can subscribe to
and unsubscribe from a stream as well as cancel pending requests for data.


