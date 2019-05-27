import { Component } from '@angular/core';

/*
Whenever the router can't match the URL to any component, it'll render the
content of Http404Component instead. Example: http://127.0.0.1:8080/#/wrong
*/

@Component({
    selector: 'http-404',
    template: '<h1 style="background: red">Page not found in this app :(</h1>'
})
export class Http404Component {

}