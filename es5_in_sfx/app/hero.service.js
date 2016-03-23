app.HeroService = function HeroService() {
    
}

app.HeroService.prototype.getHeroes = function() {
    return Promise.resolve(HEROES);
};

app.HeroService.prototype.getHeroesSlowly = function() {
    return new Promise(resolve =>
        setTimeout(()=>resolve(HEROES), 2000) // 2 seconds
    );
};

app.HeroService.prototype.getHero = function(id) {
    return Promise.resolve(HEROES).then(
        heroes => heroes.filter(hero => hero.id === id)[0]
    );
};


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/