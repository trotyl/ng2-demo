import { Component, OnInit, Inject, Injector } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

import { HeroService } from './hero.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard.component.html',
    styleUrls: [ 'app/dashboard.component.css' ],
    directives: [ ROUTER_DIRECTIVES ]
})
export class DashboardComponent {

    constructor(
        @Inject(HeroService) heroService
    ) {
        this.heroes = [];
        this._heroService = heroService;
    }

    ngOnInit() {
        this._heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1, 5));
    }
}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/