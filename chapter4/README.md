# Chapter 4 - Dependency Injection

The takeaways from this chapter are:

- Providers register objects for future injection.
- We can create a provider not only for an object, but for a string value as well.
- Injectors form a hierarchy, and if Angular can't find the provider for the requested
type as the component level, it'll try to find it by traversing parent injectors.
- The value of the `providers` property is visible in the child components, whereas
`viewProviders` is only visible at the component level.

## Injectors and providers

Each component can have an `Injector` instance capable of injecting objects or primitive
values into a component or service. Any Angular application has root injector available
to all of its modules. To let the injector know what to inject, you specify the provider.
An injector will inject the object or value specified in the provider into the constructor
of a component.
