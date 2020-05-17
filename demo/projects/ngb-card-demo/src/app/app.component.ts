import { Component } from '@angular/core';
import { CodeSnippet } from 'projects/ngb-card/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public snippetCodeVariable: CodeSnippet = {
    html: `// HTML snippet code
<ngb-card [footerClass]="'text-danger'">
  <div class="ng-card-header">Card Header</div>
  <div class="ng-card-body">
      ...
  </div>
  <div class="ng-card-footer">Card Footer</div>
</ngb-card>`,
    ts: `// typescript snippet code
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})`,
    css: `// CSS code
#demo-code{
  color: blue;
}
.demo-code{
  background-color: white;
}
    `,
    scss: `// SCSS code
#demo-code, .demo-code{
  color: blue;
  background-color: white;
}
    `,
    json: `// json snippet code
{
  "user_id": "234",
  "name": “Mk Hollida
  "email": “mock.holliday@example.com",
  "birthdate": "1971-08-01T00:00:00+00:00”
}`,
    service: `// Angular service snippet code
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  constructor() { }

}`,
    module: `// Angular module snippet code
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
    `,
  };
}
