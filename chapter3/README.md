# Chapter 3 - Navigation with the Angular router

This chapter covers:

1. Configuring routes
2. Passing data while navigating from one route to another
3. Having more than one area for navigation (a.k.a outlet) on the same page using
auxiliary routes
4. Lazy-loading modules with the router

## Location strategies

There are two types of location strategies:

1. Hash-based navigation
2. History API-Based navigation

## Building blocks of client-side navigation

- Router
- RouterOutlet
- Routes
- RouterLink
- ActivatedRoute

## Summary of this chapter

- Routes are configured on the module-level.
- Each route has a path mapped to a component.
- The are where the rout content is rendered is defined by the placement of the
`<router-outlet>` area in the component's template.
- The `routerLink` can be used for navigating to a named route.
- The `navigate()` method can be used for navigating to a named route.
- If a route requires a parameter, you have to configure it in the `path` property of
the route configuration and pass its value in `routeLink` or in the `navigate()` method.
- If a route expects a parameter, the underlying component must have a constructor
with an argument of type `ActivateRoute`.
- If a child component has its own route configuration, it's called a child route,
and it's configured using the `children` property defined in the `Route` interface.
- An application can show more than one route at the same time using named routes.
- How to use Resolve in order to make Async request.
- Lazy load modules








