import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MoviesComponent } from './list/movies.component';

@Component({
  selector: 'app-not-found',
  template: '<h2>404 - Not Found</h2>',
})
export class NotFoundComponent{
  constructor(private route: ActivatedRoute) {
    let id = this.route.snapshot.params['id'];
  }
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

}
