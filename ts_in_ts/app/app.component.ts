import { Component, Directive, AfterContentInit } from 'angular2/core';
import { NgFor } from 'angular2/common';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';

@Directive({ 
    selector: '[ngFor][ngForOf]', 
    inputs: ['ngForTrackBy', 'ngForOf', 'ngForTemplate'] 
})
class NgForIntercepter implements AfterContentInit {
    ngForOf;
    ngForTrackBy;
    ngForTemplate;
    
    ngAfterContentInit() {
        console.log(this.ngForOf);
        console.log(this.ngForTrackBy);
        console.log(this.ngForTemplate);
    }
    
    constructor() {
        console.log(this.ngForOf);
        console.log(this.ngForTrackBy);
        console.log(this.ngForTemplate);
    }
}

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['Dashboard']">Dashboard</a>
      <a [routerLink]="['Heroes']">Heroes</a>
    </nav>
    <div *ngFor="#name of names">{{ name }}{{ index }}</div>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES, NgFor, NgForIntercepter],
  providers: [
    ROUTER_PROVIDERS,
    HeroService
  ]
})
@RouteConfig([
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  },
  {
    path: '/detail/:id',
    name: 'HeroDetail',
    component: HeroDetailComponent
  },
  {
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
  }
])
export class AppComponent {
  title = 'Tour of Heroes';
  names: string[];
  
  constructor() {
      this.names = ['Alice', 'Bob', 'Cindy', 'Dave', 'ET', 'France'];
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/