function Acco( param ) {

var that = this;

var privates = {};

privates.param = param;

privates.sel = {

    'acco' : document.querySelector( privates.param.acco ),
    'header' : document.querySelectorAll( privates.param.header ),
    'port' : document.querySelector( privates.param.port )

    }

privates.opt = {

    'port_height' : window.getComputedStyle( privates.sel.port ).height

}

privates.direct = {
    
    'init_directY' : 0,
    'final_directY' : 0

}

that.closed = function () {

    for ( var s = 0; s <= privates.sel.header.length - 1; s++ ){
        privates.sel.header[s].classList.remove( 'acco-sect__header_active' );
        privates.sel.header[s].nextElementSibling.style.height = null;  }

}

// open

that.open = function () {
   
    if ( !this.classList.contains( 'acco-sect__header_active' ) ) { 
        that.closed();

        this.classList.add( 'acco-sect__header_active' );
        this.nextElementSibling.style.height = privates.opt.port_height;    }
    else {
        this.classList.remove( 'acco-sect__header_active' );
        this.nextElementSibling.style.height = null;    }   
        
}


// add event

privates.sel.header.forEach( function( el ) {
 
    el.addEventListener( 'click', that.open );   

});

// touch event

privates.sel.acco.addEventListener( 'touchstart', function ( e ) {

    privates.direct.init_directY = e.changedTouches[0].screenY;   
    console.log( privates.direct.init_directY ); 

});

privates.sel.acco.addEventListener( 'touchend', function ( e ) {

    privates.direct.final_directY = e.changedTouches[0].screenY;

    if ( privates.direct.init_directY > privates.direct.final_directY ) that.closed();    

});

}

var acco = new Acco({

    'acco' : '.acco',
    'header' : '.acco-sect__header',
    'port' : '.acco-cont__view'

});