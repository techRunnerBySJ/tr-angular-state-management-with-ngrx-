import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment, decrement, reset } from '../store/counter.actions';

interface AppState {
  counter: {
    count: number;
  };
}

@Component({
  selector: 'app-root',
  template: `
    <h1>Counter: {{ counter$ | async }}</h1>
    <button (click)="increment()">Increment</button>
    <button (click)="decrement()">Decrement</button>
    <button (click)="reset()">Reset</button>
  `
})
export class AppComponent {
  counter$ = this.store.select((state: AppState) => state.counter.count);

  constructor(private store: Store<AppState>) {}

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
