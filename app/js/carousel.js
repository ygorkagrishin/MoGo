function Timer( callback, delay ) {

var that = this, timerID, start, remaining = delay;
that.resume = function () {
    
    start = new Date();
    timerID = setTimeout( function () {

    that.resume();
    callback();
    
    }, remaining);

}

that.clear = function () {

    clearTimeout( timerID );

}  

    that.resume();

}



function Carousel( settings ) {

var that = this;

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
    'final_directX' : 0

}

privates.autoplay_delay = 3000;

// Clone node

privates.sel.wrap.appendChild( privates.sel.wrap.children[0].cloneNode( true ) );

// Prev slide

that.prev_slide = function () {

    --privates.position.current_position;

    privates.sel.wrap.style.transform = 'translateX(-' + privates.position.current_position + '00%)';

    if ( privates.position.current_position < 0 )  {

    privates.sel.wrap.classList.add( 'test-carousel__no-active' );
    privates.position.current_position = privates.position.max_position;
    privates.sel.wrap.style.transform = 'translateX(-' + privates.position.current_position + '00%)';

    setTimeout( function () {

    privates.sel.wrap.classList.remove( 'test-carousel__no-active' );
    privates.position.current_position = privates.position.max_position - 1;
    privates.sel.wrap.style.transform = 'translateX(-' + privates.position.current_position + '00%)';

        }, 20);

    }

    privates.timer.clear();

}

// Next slide

that.next_slide = function () {

    ++privates.position.current_position;
    
    privates.sel.wrap.style.transform = 'translateX(-' + privates.position.current_position + '00%)';

    if ( privates.position.current_position > privates.position.max_position ) {

    privates.sel.wrap.classList.add( 'test-carousel__no-active' );
    privates.position.current_position = 0;
    privates.sel.wrap.style.transform = 'translateX(-' + privates.position.current_position + '00%)';

    setTimeout( function () {
    ++privates.position.current_position;    
    privates.sel.wrap.classList.remove( 'test-carousel__no-active' );
    privates.sel.wrap.style.transform = 'translateX(-' + privates.position.current_position + '00%)';
        }, 20);

    } 

}

// Touch event

privates.sel.carousel.addEventListener( 'touchstart', function (e) {
    e.preventDefault();

    privates.direction.current_directX = e.changedTouches[0].screenX, privates.direction.current_directY = e.changedTouches[0].screenY;

    privates.timer.clear();

});

privates.sel.carousel.addEventListener( 'touchend', function (e) {
    e.preventDefault();

    privates.direction.final_directX = e.changedTouches[0].screenX, privates.direction.final_directY = e.changedTouches[0].screenY;

    privates.direction.current_directX > privates.direction.final_directX ?
    that.next_slide() : that.prev_slide();
        
    privates.timer.clear();

});

// Autoplay

privates.timer = new Timer( that.next_slide, privates.autoplay_delay );

privates.sel.next.addEventListener( 'click', function () {  
    privates.timer.clear();
});

privates.sel.prev.addEventListener( 'click', that.prev_slide);
privates.sel.next.addEventListener( 'click', that.next_slide);

};

/* var testimonial = new Carousel({

    'carousel' : '.test__carousel',
    'wrap' : '.test-carousel__wrap',
    'prev' : '.test-arrow__left',
    'next' : '.test-arrow__right'

});

var quote = new Carousel({

    'carousel' : '.quote__carousel',
    'wrap' : '.quote-carousel__wrap',
    'prev' : '.quote-arrow__left',
    'next' : '.quote-arrow__right'

}); */