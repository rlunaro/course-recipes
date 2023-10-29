import { BehaviorSubject, Observable, Subject, tap } from "rxjs"

function simple_subscriber(){

  let i = 0;
  let s = new Subject();

  let subs1 = s.subscribe({
    next: (v) => console.log( v )
  });

  setInterval( () => {
    s.next( i++ );
  }, 1000 );
  
}

function subscriber2() {
  
  let i = 0; 
  let s = new BehaviorSubject(); 

  let subs1 = s.subscribe({
    next: (v) => console.log( "behavior: ", v )
  });

  setInterval( () => {
    s.next( i++ );
  }, 1000 );

}

console.log('hello');
simple_subscriber();
subscriber2();


