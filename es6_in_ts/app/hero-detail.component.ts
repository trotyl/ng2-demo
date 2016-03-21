import { Component } from 'angular2/core';
import { RouteParams } from 'angular2/router';

import { HeroService } from './hero.service';

export const HeroDetailComponent = (
    Component({
        selector: 'my-hero-detail',
        templateUrl: 'app/hero-detail.component.html',
        styleUrls: ['app/hero-detail.component.css'],
        inputs: ['hero']
    })
    .Class({
        constructor: [HeroService, RouteParams, function(heroService, routeParams) {
            this._heroService = heroService;
            this._routeParams = routeParams;
        }],

        ngOnInit() {
            let id = +this._routeParams.get('id');
            this._heroService.getHero(id)
                .then(hero => this.hero = hero);
        },

        goBack() {
            window.history.back();
        }
    })
);
 


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/