function Acco( param ) {

var that = this;

var privates = {};

privates.param = param;

privates.sel = {
    
    'acco' : document.querySelector( privates.param.acco ),
    'section' : document.querySelectorAll( privates.param.section ),
    'header' : document.querySelectorAll( privates.param.header ),
    'inner' : document.querySelector( privates.param.inner ),
    'image' : document.querySelectorAll( privates.param.image )

    }

privates.direction = {

    'startDirectionY' : 0,
    'finalDirectinoY' : 0

    }

// header image default 

that.imageDefault = function () {

    for ( var i = 0; i <= privates.sel.image.length - 1; i++ ) 
        privates.sel.image[i].classList.remove( 'acco-sect__image_active' );      

};

// section body close

that.close = function () {

    for ( var c = 0; c <= privates.sel.section.length - 1; c++ ) {
    privates.sel.section[c].classList.remove( "acco__sect_active" );
    privates.sel.section[c].getElementsByClassName( "acco-header__arrow" )[0].classList.remove( "acco-header__arrow_active" );
    privates.sel.section[c].getElementsByClassName( "acco-sect__body" )[0].style.height = null;    }

};

// section body open

that.open = function () {

    var parentNode = this.parentNode,
        sectArrow = parentNode.getElementsByClassName( "acco-header__arrow" )[0],
        sectBody = parentNode.getElementsByClassName( "acco-sect__body" )[0],
        getStyle = window.getComputedStyle( privates.sel.inner ).height,
        targetImage = parentNode.getAttribute( "data-target" ),
        getImage = document.querySelector( targetImage );

    if ( !parentNode.classList.contains( "acco__sect_active" ) ) {
    that.close();
    that.imageDefault();
    
    getImage.classList.add( "acco-sect__image_active" );    
    parentNode.classList.add( "acco__sect_active" );
    sectArrow.classList.add( "acco-header__arrow_active" );
    sectBody.style.height = getStyle;    }
    else {
    that.close();   }

};

// add event

for ( var e = 0; e <= privates.sel.header.length - 1; e++ )
    privates.sel.header[e].addEventListener( 'click', that.open);

// touch event 

privates.sel.acco.addEventListener( 'touchstart', function (e) {

    privates.direction.startDirectionY = e.changedTouches[0].screenY;

});

privates.sel.acco.addEventListener( 'touchend', function (e) {

    privates.direction.finalDirectionY = e.changedTouches[0].screenY;

    if ( privates.direction.startDirectionY > privates.direction.finalDirectionY  ) that.close();

});

};

var acco = new Acco({

    'acco' : '.acco__acco',
    'section' : '.acco__sect',
    'header' : '.acco-sect__header',
    'inner' : '.acco-sect__inner',
    'image' : '.acco-sect__image'
 
});

