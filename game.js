'use strict'

/**
 * ゲームづくりの基本となるクラス
 */
class Game {

    constructor( width, height ){
        this.canvas =document.createElement('canvas');
        document.body.appendChild( this.canvas );
        this.canvas.width = width || 320;
        this.canvas.height = height || 320;
    }

    start() {
        this._mainLoop();
    }

    _mainLoop() {
        const ctx = this.canvas.getContext('2d');
        ctx.fillStyle="#000000" ;
        ctx.fillRect( 0,0,this.canvas.width,this.canvas.height );

        requestAnimationFrame( this._mainLoop.bind( this ));
    }
}