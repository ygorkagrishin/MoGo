function Acco( param ) {

var that = this;

var privates = {};

privates.param = param;

privates.sel = {

    'acco' : document.querySelector( privates.param.acco ),
    'header' : document.querySelectorAll( privates.param.header ),
    'arrow' : document.querySelectorAll( privates.param.arrow ),
    'port' : document.querySelector( privates.param.port )

    }

privates.opt = {

    'port_height' : window.getComputedStyle( privates.sel.port ).height

}

privates.direct = {
    
    'init_directY' : 0,
    'final_directY' : 0

}

// close

that.close = function () {

    for ( var s = 0; s <= privates.sel.header.length - 1; s++ ){
    var elem = privates.sel.header[s];

    privates.sel.header[s].classList.remove( 'acco-sect__header_active' );
    privates.sel.header[s].nextElementSibling.style.height = null;

    privates.sel.header[s].getElementsByClassName( 'acco-header__arrow' )[0].classList.remove( 'acco-header__arrow_active' );  }

}

// open

that.open = function () {
    var arrow = this.getElementsByClassName( 'acco-header__arrow' );
    
    if ( !this.classList.contains( 'acco-sect__header_active' ) ) { 
        that.close();

        for ( var a = 0; a <= arrow.length - 1; a++ ) {
        arrow[a].classList.add( 'acco-header__arrow_active' );    }

        this.classList.add( 'acco-sect__header_active' );
        this.nextElementSibling.style.height = privates.opt.port_height;    }
    else {
        that.close();    }   
        
}

// add event

for ( var e = 0; e <= privates.sel.header.length - 1; e++ ) 
    privates.sel.header[e].addEventListener( 'click', that.open );

// touch event

privates.sel.acco.addEventListener( 'touchstart', function ( e ) {

    privates.direct.init_directY = e.changedTouches[0].screenY;  

});

privates.sel.acco.addEventListener( 'touchend', function ( e ) {

    privates.direct.final_directY = e.changedTouches[0].screenY;

    if ( privates.direct.init_directY > privates.direct.final_directY ) that.close();    

});

}

var acco = new Acco({

    'acco' : '.acco',
    'header' : '.acco-sect__header',
    'arrow' : '.acco-header__arrow',
    'port' : '.acco-cont__view'

});