import {Observable } from 'rxjs/Observable';

/**
 * This service creates an instance of WebSocket that's connected to the server based on
 * the provided URL, and this instance handles messages received from the server. The
 * WebSocketService also has a sendMessage() method so the client can send messages to the server.
 */
export class WebSocketService {
    ws: WebSocket;

    createObservableSocket(url: string): Observable<any> {
        this.ws = new WebSocket(url);

        return new Observable(
            observer => {
                this.ws.onmessage = (event) => observer.next(event.data);
                this.ws.onerror = (event) => observer.error(event);
                this.ws.onclose = (event) => observer.complete();

            }
        );
    }

    sendMessage(message: any) {
        this.ws.send(message);
    }
}

