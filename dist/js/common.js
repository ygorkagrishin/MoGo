function Acco(e){var c=this,t={};t.param=e,t.sel={acco:document.querySelector(t.param.acco),header:document.querySelectorAll(t.param.header),arrow:document.querySelectorAll(t.param.arrow),port:document.querySelector(t.param.port)},t.opt={port_height:window.getComputedStyle(t.sel.port).height},t.direct={init_directY:0,final_directY:0},c.close=function(){for(var e=0;e<=t.sel.header.length-1;e++){t.sel.header[e];t.sel.header[e].classList.remove("acco-sect__header_active"),t.sel.header[e].nextElementSibling.style.height=null,t.sel.header[e].getElementsByClassName("acco-header__arrow")[0].classList.remove("acco-header__arrow_active")}},c.open=function(){var e=this.getElementsByClassName("acco-header__arrow");if(this.classList.contains("acco-sect__header_active"))c.close();else{c.close();for(var a=0;a<=e.length-1;a++)e[a].classList.add("acco-header__arrow_active");this.classList.add("acco-sect__header_active"),this.nextElementSibling.style.height=t.opt.port_height}};for(var a=0;a<=t.sel.header.length-1;a++)t.sel.header[a].addEventListener("click",c.open);t.sel.acco.addEventListener("touchstart",function(e){t.direct.init_directY=e.changedTouches[0].screenY}),t.sel.acco.addEventListener("touchend",function(e){t.direct.final_directY=e.changedTouches[0].screenY,t.direct.init_directY>t.direct.final_directY&&c.close()})}var acco=new Acco({acco:".acco",header:".acco-sect__header",arrow:".acco-header__arrow",port:".acco-cont__view"});
function Timer(e,t){var i,n,r=this,s=t;r.resume=function(){n=new Date,i=setTimeout(function(){r.resume(),e()},s)},r.clear=function(){clearTimeout(i)},r.resume()}function Carousel(e){var t=this,i={};i.settings=e,i.sel={carousel:document.querySelector(i.settings.wrap),wrap:document.querySelector(i.settings.wrap),prev:document.querySelector(i.settings.prev),next:document.querySelector(i.settings.next)},i.position={current_position:0,max_position:i.sel.wrap.children.length},i.direction={current_directX:0,final_directX:0},i.autoplay_delay=3e3,i.sel.wrap.appendChild(i.sel.wrap.children[0].cloneNode(!0)),t.prev_slide=function(){--i.position.current_position,i.sel.wrap.style.transform="translateX(-"+i.position.current_position+"00%)",i.position.current_position<0&&(i.sel.wrap.classList.add("test-carousel__no-active"),i.position.current_position=i.position.max_position,i.sel.wrap.style.transform="translateX(-"+i.position.current_position+"00%)",setTimeout(function(){i.sel.wrap.classList.remove("test-carousel__no-active"),i.position.current_position=i.position.max_position-1,i.sel.wrap.style.transform="translateX(-"+i.position.current_position+"00%)"},20)),i.timer.clear()},t.next_slide=function(){++i.position.current_position,i.sel.wrap.style.transform="translateX(-"+i.position.current_position+"00%)",i.position.current_position>i.position.max_position&&(i.sel.wrap.classList.add("test-carousel__no-active"),i.position.current_position=0,i.sel.wrap.style.transform="translateX(-"+i.position.current_position+"00%)",setTimeout(function(){++i.position.current_position,i.sel.wrap.classList.remove("test-carousel__no-active"),i.sel.wrap.style.transform="translateX(-"+i.position.current_position+"00%)"},20))},i.sel.carousel.addEventListener("touchstart",function(e){e.preventDefault(),i.direction.current_directX=e.changedTouches[0].screenX,i.direction.current_directY=e.changedTouches[0].screenY,i.timer.clear()}),i.sel.carousel.addEventListener("touchend",function(e){e.preventDefault(),i.direction.final_directX=e.changedTouches[0].screenX,i.direction.final_directY=e.changedTouches[0].screenY,i.direction.current_directX>i.direction.final_directX?t.next_slide():t.prev_slide(),i.timer.clear()}),i.timer=new Timer(t.next_slide,i.autoplay_delay),i.sel.next.addEventListener("click",function(){i.timer.clear()}),i.sel.prev.addEventListener("click",t.prev_slide),i.sel.next.addEventListener("click",t.next_slide)}
