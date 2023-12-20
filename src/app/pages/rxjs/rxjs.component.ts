import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription, filter, interval, map, retry, take } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: ``
})
export class RxjsComponent implements OnDestroy {
  public intervalSubs: Subscription;

  constructor() { 
    

    // this.returnObservable().pipe(
    //   retry(2)
    // )
    // .subscribe(
    //   (val) => console.log('next: ', val),
    //   (err) => console.warn('error: ', err),
    //   () => console.info('complete')
    // );

    this.intervalSubs = this.retornaIntervalo().subscribe(console.log);
  }

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  retornaIntervalo(): Observable<number> {
    return interval(500)
      .pipe(
        map( val => val + 1),
        filter( val => (val % 2 === 0) ? true : false),
        take(10),
      );
  }

  returnObservable(): Observable<number> {
    let i = -1;
    
    return new Observable<number>( observer => {
      const interval = setInterval(() => {
        i++;
        observer.next(i);
        if (i === 4) {
          clearInterval(interval);
          observer.complete();
        }
        if (i === 2) {
          observer.error('i llegó al valor de 2');
        }
      }, 1000);
    });
  }

}
