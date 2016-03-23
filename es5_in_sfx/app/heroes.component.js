app.HeroesComponent = (
    ng.core.Component({
        selector: 'my-heroes',
        templateUrl: 'app/heroes.component.html',
        styleUrls:  ['app/heroes.component.css'],
        directives: [app.HeroDetailComponent]
    })
    .Class({
        constructor: [ng.router.Router, app.HeroService, function(router, heroService) {
            this._router = router;
            this._heroService = heroService;
        }],

        getHeroes: function() {
            this._heroService.getHeroes().then(heroes => this.heroes = heroes);
        },

        ngOnInit: function() {
            this.getHeroes();
        },

        onSelect: function(hero) { 
            this.selectedHero = hero; 
        },

        gotoDetail: function() {
            this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
        }
    })
);


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/