"use strict";

function Carousel( settings ) {

var privates = {};

privates.settings = settings;

privates.sel = {

    'carousel' : document.querySelector( privates.settings.carousel ),
    'wrap' : document.querySelector( privates.settings.wrap ),
    'children' : document.querySelector( privates.settings.wrap ).children,
    'prev' : document.querySelector( privates.settings.prev ),
    'next' : document.querySelector( privates.settings.next ) 

    }

privates.opt = {

    'position' : 0,
    'max_position' : document.querySelector( privates.settings.wrap ).children.length

    }
    
privates.sel.prev.addEventListener( 'click', function () {

    --privates.opt.position;

    if ( privates.opt.position < 0 ) {
        privates.opt.position = privates.opt.max_position - 1;   }
    
    privates.sel.wrap.style.transform = 'translateX( -' + privates.opt.position + '00% )';

    });  

privates.sel.next.addEventListener( 'click', function () {

    ++privates.opt.position;

    if ( privates.opt.position >= privates.opt.max_position ) {
        privates.opt.position = 0;   }

    privates.sel.wrap.style.transform = 'translateX( -' + privates.opt.position + '00% )';

    });     

};

var carousel = new Carousel({

    'carousel' : '.test__carousel',
    'wrap' : '.test-carousel__wrap',
    'prev' : '.test-arrow__left',
    'next' : '.test-arrow__right'

});