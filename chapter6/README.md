# Chapter 6 - Implementing components communication

This chapter covers:

- Creating loosely coupled components
- How a parent component should pass data to its child and vice versa
- Implementing the Mediator design pattern to create reusable components
- Projection or Transclusion (NgConent)
- A component lifecycle (NgOnInit, NgOnChanges, etc).
- Understanding change detection

## Mediator Pattern

The role of the mediator is to ensure that components properly fit together
according to the task at hand while remaining loosely coupled.

## Component Lifecycle

Whenever you see the word `Content` in the name of the lifecycle callback method, that
method is applied if content is projected using <ng-content>. When you see the word
`View` in the name of the callback method, it applies to the template of the component.
The word `Checked` means the component's changes are applied and the component is
synchronized with the DOM.

## Change Detection

Angular's change-detection (CD) mechanism is implemented in zone.js (a.k.a. the Zone). Its
main purpose is to keep the changes in the component properties (the model) and the UI in
sync. CD is initiated by the Zone, it makes one pass starting from the root down to the
leaf components, trying to see whether the UI of each component needs to be updated.

Angular implements two CD strategies: `Default` and `OnPush`. If all components use the
Default strategy, the Zone checks the entire component tree regardless of where the change
happened. If a particular component declares the OnPush strategy, the Zone checks this
component and its children only if the bindings to the component's input properties
have changed.

The change detection mechanism applies changes from a component's property to the UI.
Change detection never changes the v alue of the component's property.

Examples here:

https://github.com/Farata/angular2typescript/blob/master/chapter6/inter_comp_communications/app/comp_lifecycle/%5Bnot%20in%20use%5D%20on-after-view-checked.ts

## Summary

These are the main takeaways for this chapter:

- Parent and child components should avoid direct access to each other's internals but
should communicate via input and output properties.
- A component can emit custom events via its output properties, and these events can carry
an application-specific payload.
- Communications between unrelated components can be arranged by using the Mediator design
pattern.
- A parent component can pass one or more template fragments to a child at runtime.
- Each Angular component lets you intercept major lifecycle events of a component and
insert application-specific code there.
- The Angular change-detection mechanism automatically monitors changes to components'
properties and updates the UI accordingly.
- You can mark selected branches of your app component tree to be excluded from the
change-detection process.

















