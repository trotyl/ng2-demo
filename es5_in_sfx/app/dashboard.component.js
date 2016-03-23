app.DashboardComponent = (
    ng.core.Component({
        selector: 'my-dashboard',
        templateUrl: 'app/dashboard.component.html',
        styleUrls: ['app/dashboard.component.css']
    })
    .Class({      
        constructor: [ng.router.Router, app.HeroService, function(router, heroService) {
            this._router = router;
            this._heroService = heroService;
            this.heroes = [];
        }],

        ngOnInit: function() {
            this._heroService.getHeroes()
                .then(heroes => this.heroes = heroes.slice(1,5));
        }, 

        gotoDetail: function(hero) {
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