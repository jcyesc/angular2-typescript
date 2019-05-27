import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

/*
There are two observables in the following code:

1. The FormControl directive creates an observable from the input field events (this.searchInput.valueChanges).
2. getWeather() also returns an observable.

We use the switchMap() operator instead of subscribe when the function that handles data
generated by observable can also return an observable. Then we use subscribe() for the
second observable:

Observable1 -> switchMap(function) -> Observable2 -> subscribe()

We are switching over from the first observable to the second one. If Observable1 pushes
the new value but the function that creates Observable2 hasn't finished yet, it's killed;
switchMap() unsubscribes and resubscribes to Observable1 and starts handling the new
value from this stream.
*/
@Component({
    selector: "observable-events-http",
    template: `
      <h2>Observable weather</h2>
      <input type="text" placeholder="Enter city" [formControl]="searchInput">
      <h3>{{temperature}}</h3>
    `
})
export class ObservableEventsHttpComponent {
    private baseWeatherURL: string = 'http://api.openweathermap.org/data/2.5/weather?q=';
    // If the below API key doesn't work request your own key at http://api.openweathermap.org
    private urlSuffix: string = "&units=imperial&appid=ca3f6d6ca3973a518834983d0b318f73";

    searchInput: FormControl = new FormControl();
    temperature: string;

    constructor(private http: Http) {
        this.searchInput.valueChanges
            .debounceTime(200)
            .switchMap(city => this.getWeather(city))
            .subscribe(
                res => {
                    console.log("executing " + res)
                    this.temperature =
                        `Current temperature is ${res['main'].temp} F, ` +
                        `humidity: ${res['main'].humidity}%`;
                },
                err => {
                    console.log(`Can't get weather. Error code %s, URL: %s`,
                        err.message, err.url);
                }
            );
    }

    getWeather(city: string): Observable<Object<string, string>> {
        return this.http.get(this.baseWeatherURL + city + this.urlSuffix)
            .map(res => {
                console.log("Response " + res.json());
                return res.json()
            })
            .catch(err => {
                if (err.status === 404) {
                    console.log(`City ${city} not found`);
                    return Observable.of()
                }    // empty observable
            });
    }
}




