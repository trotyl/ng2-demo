import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

export const HeroesComponent = (
    Component({
        selector: 'my-heroes',
        templateUrl: 'app/heroes.component.html',
        styleUrls:  ['app/heroes.component.css'],
        directives: [HeroDetailComponent]
    })
    .Class({
        constructor: [Router, HeroService, function(router, heroService) {
            this._router = router;
            this._heroService = heroService;
        }],

        getHeroes() {
            this._heroService.getHeroes().then(heroes => this.heroes = heroes);
        },

        ngOnInit() {
            this.getHeroes();
        },

        onSelect(hero) { 
            this.selectedHero = hero; 
        },

        gotoDetail() {
            this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
        }
    })
)


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/