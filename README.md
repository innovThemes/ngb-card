# ng-card - Boostrap 4 Powered Angular Card with Advance features.


[Angular](https://angular.io/) widgets built from the ground up using only [Bootstrap 4](https://getbootstrap.com/) CSS with APIs designed for the Angular ecosystem.



## Table of Contents

- [Demo](#demo)
- [Dependencies](#dependencies)
- [Installation](#installation)
- [Initial Configuration](#Configuration)
- [Example](#example)
- [API](#api)
- [Supported browsers](#supported-browsers)
- [Getting help](#getting-help)
- [You think you've found a bug?](#you-think-youve-found-a-bug)

## Demo

Please check all advance features we have in action at https://innovthemes.github.io/ngb-card/demo/

## Dependencies

The only four dependencies are 
[ng-bootstrap](https://ng-bootstrap.github.io/#/home) for advance features.
[Bootstrap 4](https://getbootstrap.com) for Styling.
[ngx-highlightjs](https://github.com/murhafsousli/ngx-highlightjs) for snippet code.
The supported versions are:



## Installation

Just run the following:

```shell
npm install --save ng-card
```
## Initial Configuration
**app.module.ts**
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbCardModule } from 'projects/ngb-card/src/public-api'; // <------

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbCardModule // <------
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Open **polyfills.ts**
ADD BELOW LINE AT BOTTOM
```shell
import '@angular/localize/init';
```
**Note**: If you get **error while compilation then recompile the whole angular project by running `ng serve` again**

## Example
1. Basic Card
    1.1 **component.html**
    ```html
    <ngb-card [footerClass]="'text-danger'">
       <div class="ng-card-header">Card Header</div>
       <div class="ng-card-body text-center">
          <div class="mx-auto mt-2">
             <img class="img-fluid"
                src="https://p.kindpng.com/picc/s/715-7155174_professional-headshots-men-asian-png-download-professional-profile.png"
                width="70" alt="img placeholder" />
          </div>
          <h4>Gerry Dillon</h4>
          <p class="">Designer</p>
          <div class="d-flex justify-content-between">
             <small class="float-left font-weight-bold" id="example-caption-3">720 Points</small>
             <small class="float-right font-weight-bold" id="example-caption-4">1000</small>
          </div>
          <div class="progress box-shadow my-3">
             <div class="progress-bar bg-success" role="progressbar" aria-valuenow="45" aria-valuemin="45"
                aria-valuemax="100" style="width: 45%;" aria-describedby="example-caption-3"></div>
          </div>
          <div class="d-flex justify-content-between">
             <button class="btn btn-primary">
                Follow
             </button>
             <button class="btn btn-outline-primary">
                Message
             </button>
          </div>
       </div>
       <div class="ng-card-footer">Card Footer</div>
    </ngb-card>    
    ```
    1.2 **Output**
![Basic ng-card image ](https://s6.gifyu.com/images/basic-ng-card.png)

2. Advance Card
    2.1 component.html
    ```html
    <ngb-card [headerClass]="'h3 text-primary'" [footerClass]="'text-danger'" [codeSnippet]="snippetCodeVariable">
       <div class="ng-card-header">Card Header</div>
       <div class="ng-card-body text-center">
          <div class="mx-auto mt-2">
             <img class="img-fluid"
                src="https://p.kindpng.com/picc/s/715-7155174_professional-headshots-men-asian-png-download-professional-profile.png"
                width="70" alt="img placeholder" />
          </div>
          <h4>Gerry Dillon</h4>
          <p class="">Designer</p>
          <div class="d-flex justify-content-between">
             <small class="float-left" id="ng-card-advance">720 Points</small>
             <small class="float-right" id="ng-card-advance">1000</small>
          </div>
          <div class="progress shadow-sm my-3">
             <div class="progress-bar bg-success" role="progressbar" aria-valuenow="45" aria-valuemin="45"
                aria-valuemax="100" style="width: 45%;" aria-describedby="ng-card-advance"></div>
          </div>
          <div class="d-flex justify-content-between">
             <button class="btn btn-primary">
                Follow
             </button>
             <button class="btn btn-outline-primary">
                Message
             </button>
          </div>
       </div>
       <div class="ng-card-footer">Card Footer</div>
    </ngb-card>
    ```
    2.2 **component.ts**
    ```typescript
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
    ```
    
    2.3 **Output** : 
        ![ng-card-advance-feature-demo](https://s6.gifyu.com/images/ng-card-advance-feature-demo.md.gif)

## API

| Selector         | Type    |   property    | Discription   |
| ------------ | ------- | ------------- | ------------- |
| `ngb-card` | selector |   element |  ngb-card component |
| `cardClass` | Input |  class  |   Use cardClass input property to add class to card.       |
| `headerClass` | Input  | class | Use headerClass input property to add class to card header.              |
| `bodyClass` | Input   |  class    | Use bodyClass input property to add class to card body.              |
|  `footerClass`  |    Input     |         class      | Use footerClass input property to add class to card footer |
| `codeSnippet` | `CodeSnippet` | object | Create HTML \| TS \| SCSS \| CSS \| JSON \| SERVICE \| MODULE  code snippets with tabs by passing html \| ts \| scss\| \| css \| json \| service \| module as key value pair to the `snippetCode` input Property.  |

    

## Supported browsers

We support the same browsers and versions supported by both Bootstrap 4 and Angular, whichever is _more_ restrictive. See [Angular browser support](https://angular.io/guide/browser-support) and [Bootstrap browser support](https://getbootstrap.com/docs/4.4/getting-started/browsers-devices/#supported-browsers) for more details.

Our code is automatically tested on all supported browsers.


## Getting help

Please, do not open issues for the general support questions as we want to keep GitHub issues for bug reports and feature requests. You've got much better chances of getting your question answered on [StackOverflow](http://stackoverflow.com/questions/tagged/ng-bootstrap) where maintainers are looking at questions tagged with `ngb-card` or you can directly chat with us [chat icon at bottom right corner] at https://innovthemes.com/.

StackOverflow is a much better place to ask questions since:
* there are hundreds of people willing to help on StackOverflow
* questions and answers stay available for public viewing so your question / answer might help someone else
* SO voting system assures that the best answers are prominently visible.

To save your and our time we will be systematically closing all the issues that are requests for general support and redirecting people to StackOverflow.


## You think you've found a bug?

We want to fix it ASAP! But before fixing a bug we need to reproduce and confirm it.

We ask you to respect two things:
* fill the GitHub issue template by providing the bug description and appropriate versions of Angular, ng-bootstrap and TypeScript.
* provide a use-case that fails with a **minimal reproduction scenario** using [StackBlitz](https://stackblitz.com) (you can start by forking one from our [github page](https://github.com/innovThemes/ngb-card))

A minimal reproduction scenario allows us to quickly confirm a bug (or point out a coding problem) as well as confirm that we are fixing the right problem.
