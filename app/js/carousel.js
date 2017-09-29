function Carousel( param ) {

var param = param;

var sel = {

    'carousel' : document.querySelector( param.carousel ),
    'wrap' : document.querySelector( param.wrap ),
    'slides' : document.querySelectorAll( param.slide ),
    'slide' : document.querySelector( param.slide ),
    'children' : document.querySelector( param.wrap ).children,
    'prev' : document.querySelector( param.prev ),
    'next' : document.querySelector( param.next )

    }

var opt = {

    'position' : 0,
    'max__position' : document.querySelector( param.wrap ).children

    }
    
var init = function () {

var totalAmount = 0;
    
for ( var s=0; s<=sel.slides.length - 1; s++ ) {
    totalAmount += sel.slides[s].offsetWidth;
    sel.slides[s].style.width = sel.carousel.offsetWidth + 'px'; }

    sel.wrap.style.width = totalAmount + 'px';

    };    

init(); 
   
};

var carousel = new Carousel({

    'carousel' : '.test__carousel',
    'wrap' : '.test-carousel__wrap',
    'slide' : '.test-carousel__slide',
    'prev' : '.test-carousel__arrow-left',
    'next' : '.test-carousel__arrow-right'

});