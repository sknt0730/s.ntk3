'use strict'

addEventListener('load',()=> {
    const game =new Game(640,480);

    const inu = new Sprite( 'image/$PW-DogRetriever01.png')
    game.add( inu );
    game.start();
});