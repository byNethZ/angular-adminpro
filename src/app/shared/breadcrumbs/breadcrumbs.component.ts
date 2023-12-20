import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription, filter, map } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: ``
})
export class BreadcrumbsComponent implements OnDestroy {
  public title: string = 'Sistema de Administración';
  public titleSubs$: Subscription;

  constructor(
    private router: Router,
  ) {
    this.titleSubs$ = this.getArgsRoute()
      .subscribe(({ title }) => {
        this.title = title;
        document.title = `AdminPro - ${title}`;
      });
  }

  ngOnDestroy(): void {
    this.titleSubs$.unsubscribe();
  }

  getArgsRoute() {
    return this.router.events.pipe(
      filter(event => event instanceof ActivationEnd),
      filter(event => (event as ActivationEnd).snapshot.firstChild === null),
      map(event => (event as ActivationEnd).snapshot.data)
    );
  }
}
