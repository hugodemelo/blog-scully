import { Component } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: [ './articles.component.scss' ]
})
export class ArticlesComponent {

  readonly posts$ = this.scullyService.available$
    .pipe(
      map(routes => routes.filter(route => route.title))
    );

  constructor(private readonly scullyService: ScullyRoutesService) {
  }
}
