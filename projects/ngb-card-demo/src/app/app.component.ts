import { Component } from '@angular/core';
import { CodeSnippet } from 'projects/ngb-card/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public snippetCodeAccordion: CodeSnippet = {
    //     html: `<div class="accordion accordion-default collapse-bordered">
    //     <ngb-accordion [destroyOnHide]='false' [closeOthers]="true" activeIds="panelBorderBottom1">
    //     </ngb-accordion>
    // </div>`,
        ts: `import { Component } from '@angular/core';
        import { codeSnippet } from 'projects/ng-card/src/public-api';

        @Component({
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss'],
        })`,
        css: `
        .collapse {
          transition: max-height .55s, opacity .35s ease-in-out;
          max-height: 0;
          opacity: 0;
          display: block !important;

          &.show {
            max-height: 100rem;
            opacity: 1;
          }
        }
        `,
        json: `
        name: "John", age: 31, city: "New York"
        `,
        service: `import { Component } from '@angular/core';
        import { codeSnippet } from 'projects/ng-card/src/public-api';

        @Component({
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss'],
        })`,
        module: `import { Component } from '@angular/core';
        import { codeSnippet } from 'projects/ng-card/src/public-api';

        @Component({
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss'],
        })`,
      };

}
