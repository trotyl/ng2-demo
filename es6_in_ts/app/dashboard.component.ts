import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { HeroService } from './hero.service';

export const DashboardComponent = (
    Component({
        selector: 'my-dashboard',
        templateUrl: 'app/dashboard.component.html',
        styleUrls: ['app/dashboard.component.css']
    })
    .Class({      
        constructor: [Router, HeroService, function(router, heroService) {
            this._router = router;
            this._heroService = heroService;
            this.heroes = [];
        }],

        ngOnInit() {
            this._heroService.getHeroes()
                .then(heroes => this.heroes = heroes.slice(1,5));
        }, 

        gotoDetail(hero) {
            let link = ['HeroDetail', { id: hero.id }];
            this._router.navigate(link);
        }
    })
);

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/