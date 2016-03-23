app.AppComponent = ng.router.RouteConfig([
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: app.DashboardComponent,
        useAsDefault: true
    },
    {
        path: '/detail/:id',
        name: 'HeroDetail',
        component: app.HeroDetailComponent
    },
    {
        path: '/heroes',
        name: 'Heroes',
        component: app.HeroesComponent
    }
])(
    ng.core.Component({
        selector: 'my-app',
        template: `
            <h1>{{title}}</h1>
            <nav>
            <a [routerLink]="['Dashboard']">Dashboard</a>
            <a [routerLink]="['Heroes']">Heroes</a>
            </nav>
            <router-outlet></router-outlet>
        `,
        styleUrls: ['app/app.component.css'],
        directives: [ng.router.ROUTER_DIRECTIVES],
        providers: [
            ng.router.ROUTER_PROVIDERS,
            app.HeroService
        ]
    })
    .Class({
        constructor: function() {
            this.title = 'Tour of Heroes';
        }
    })
);


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/