app.HeroDetailComponent = (
    ng.core.Component({
        selector: 'my-hero-detail',
        templateUrl: 'app/hero-detail.component.html',
        styleUrls: ['app/hero-detail.component.css'],
        inputs: ['hero']
    })
    .Class({
        constructor: [app.HeroService, ng.router.RouteParams, function(heroService, routeParams) {
            this._heroService = heroService;
            this._routeParams = routeParams;
        }],

        ngOnInit: function() {
            let id = +this._routeParams.get('id');
            this._heroService.getHero(id)
                .then(hero => this.hero = hero);
        },

        goBack: function() {
            window.history.back();
        }
    })
);
 


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/