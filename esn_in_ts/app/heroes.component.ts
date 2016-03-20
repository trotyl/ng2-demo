import { Component, OnInit, Inject, Injector } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls: ['app/heroes.component.css'],
    directives: [HeroDetailComponent, ROUTER_DIRECTIVES],
    inputs: ['$router']
})
export class HeroesComponent {

    constructor(
        @Inject(HeroService) heroService
    ) { 
        this._heroService = heroService;
    }

    getHeroes() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit() {
        this.getHeroes();
    }

    onSelect(hero) { this.selectedHero = hero; }
}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/