"use strict";

function Carousel( settings ) {

var privates = {};

privates.settings = settings;

privates.sel = {

    'carousel' : document.querySelector( privates.settings.wrap ),
    'wrap' : document.querySelector( privates.settings.wrap ),
    'prev' : document.querySelector( privates.settings.prev ),
    'next' : document.querySelector( privates.settings.next )

    };

privates.position = {

    'current_position' : 0,
    'max_position' : privates.sel.wrap.children.length

    };

privates.direction = {

    'current_directX' : 0,
    'current_directY' : 0,
    'final_directX' : 0,
    'final_directY' : 0

}

// Prev

privates.prev_slide = function () {

    --privates.position.current_position;

    if ( privates.position.current_position < 0 ) {
    privates.sel.wrap.classList.add( 'test-carousel__no-active' );    
    privates.position.current_position = privates.position.max_position;
    setTimeout( function (){

    privates.sel.wrap.classList.remove( 'test-carousel__no-active' );    
    privates.position.current_position = privates.position.max_position - 1;
    privates.sel.wrap.style.transform = 'translateX(-' + privates.position.current_position + '00%)';

    }, 20);  }
    
    privates.sel.wrap.style.transform = 'translateX(-' + privates.position.current_position + '00%)';

    }; 

// Next

privates.next_slide = function () {

    ++privates.position.current_position;

    if ( privates.position.current_position > privates.position.max_position - 1) {

    setTimeout( function () {
    
    privates.position.current_position = 0;
    privates.sel.wrap.classList.add( 'test-carousel__no-active' );
    privates.sel.wrap.style.transform = 'translateX(' + privates.position.current_position + '00%)';

    }, 500); }
    privates.sel.wrap.classList.remove( 'test-carousel__no-active' );
    privates.sel.wrap.style.transform = 'translateX(-' + privates.position.current_position + '00%)';

    };

// Swipe

privates.sel.carousel.addEventListener( 'touchstart', function (e) {
    e.preventDefault();

    privates.direction.current_directX = e.changedTouches[0].screenX, privates.direction.current_directY = e.changedTouches[0].screenY;

});

privates.sel.carousel.addEventListener( 'touchend', function (e) {
    e.preventDefault();

    privates.direction.final_directX = e.changedTouches[0].screenX, privates.direction.final_directY = e.changedTouches[0].screenY;

    privates.direction.current_directX > privates.direction.final_directX ?
    privates.next_slide() : privates.prev_slide();

});

if ( privates.sel.prev !== undefined ) privates.sel.prev.addEventListener( 'click', privates.prev_slide);

if ( privates.sel.prev !== undefined ) privates.sel.next.addEventListener( 'click', privates.next_slide);

};

var carousel = new Carousel({

    'carousel' : '.test__carousel',
    'wrap' : '.test-carousel__wrap',
    'prev' : '.test-arrow__left',
    'next' : '.test-arrow__right'

});
