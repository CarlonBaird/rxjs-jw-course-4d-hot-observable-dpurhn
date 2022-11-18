import { Observable } from 'rxjs';

const helloButton = document.querySelector('button#hello');

/*
  hot observable is one where the actual cause, the actual source of the emissions
  is coming from the outside of the Observable's logic in a way that each new
  Subscription can use the same source as others
*/

const helloClick$ = new Observable<MouseEvent>((subscriber) => {
  helloButton.addEventListener('click', (event) => {
    subscriber.next(event);
  });
});

helloClick$.subscribe((event) =>
  console.log('Sub 1:', event.type, event.x, event.y)
);

setTimeout(() => {
  console.log('Subscription 2 starts');
  helloClick$.subscribe((event) =>
    console.log('Sub 2:', event.type, event.x, event.y)
  );
}, 5000);
