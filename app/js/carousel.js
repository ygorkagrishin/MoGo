"use strict";

function Carousel( settings ) {

var privates = {};

privates.settings = settings;

privates.sel = {

    'wrap' : document.querySelector( privates.settings.wrap ),
    'prev' : document.querySelector( privates.settings.prev ),
    'next' : document.querySelector( privates.settings.next )

    };

privates.position = {

    'current_position' : 0,
    'max_position' : privates.sel.wrap.children.length

    };

this.prev_slide = function () {

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

this.next_slide = function () {

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

privates.sel.prev.addEventListener( 'click', this.prev_slide);

privates.sel.next.addEventListener( 'click', this.next_slide);

};

var carousel = new Carousel({

    'wrap' : '.test-carousel__wrap',
    'prev' : '.test-arrow__left',
    'next' : '.test-arrow__right'

});