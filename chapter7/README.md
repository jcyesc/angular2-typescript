https://adssettings.google.com/authenticated# Chapter 7 - Working with forms

## This chapter covers:

- Understanding the Angular Forms API (NgModel, FormControl, FormGroup, form directives,
FormBuilder)
- Working with template-driven forms
- Working with reactive forms
- Understanding form validation


## Template-driven forms

When we work with template-driven forms, we can use only directives to define a model.
These directives come with FormsModule:

- NgModel
- NgModelGroup
- NgForm

## Reactive Forms

Unlike in the template-driven approach, creating a reactive form is a two-step process.
First you need to create a model programmatically in the code, and then you link HTML
elements to that model using directives in the template. The main objects are:

- FormControl
- FormGroup
- FormArray

## Asynchronous validators

The Forms API supports asynchronous validators. Async validators can be used to check
form values against a remote server, which involves sending an HTTP request. Like regular
validators, async validators are functions. The only difference is that async validators
should return either an `Observable` or a `Promise` object.

## Checking a field's status and validity

### Touched and untouched fields

We can use `touched` and `untouched` properties to check whether a field was visited by
the user. If the user puts the focus into a field using the keyboard or mouse, the field
because `touched`, otherwise is `untouched`.

### Pristine and dirty fields

`dirty` indicates that the field was modified after it was initialized with its original
value. These properties can be used to prompt the user to save changed data before
leaving the page or closing the dialog window.

### Pending fields

If we have async validators configured for a control, we may also find the Boolean
property `pending` to be useful. It indicates whether the validity status is currently
unknown. This happens when an async validator is still in progress and we need to wait
for the results. The property can be used for displaying a progress indicator.

For reactive forms, the `statusChanges` property of type Observable can be more convenient.
It emits one of the three values: `VALID`, `INVALID` and `PENDING`.











