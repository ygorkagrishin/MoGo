"use strict";function Carousel(t){var s={};s.settings=t,s.sel={wrap:document.querySelector(s.settings.wrap),prev:document.querySelector(s.settings.prev),next:document.querySelector(s.settings.next)},s.position={current_position:0,max_position:s.sel.wrap.children.length},this.prev_slide=function(){--s.position.current_position,s.position.current_position<0&&(s.sel.wrap.classList.add("test-carousel__no-active"),s.position.current_position=s.position.max_position,setTimeout(function(){s.sel.wrap.classList.remove("test-carousel__no-active"),s.position.current_position=s.position.max_position-1,s.sel.wrap.style.transform="translateX(-"+s.position.current_position+"00%)"},20)),s.sel.wrap.style.transform="translateX(-"+s.position.current_position+"00%)"},this.next_slide=function(){++s.position.current_position,s.position.current_position>s.position.max_position-1&&setTimeout(function(){s.position.current_position=0,s.sel.wrap.classList.add("test-carousel__no-active"),s.sel.wrap.style.transform="translateX("+s.position.current_position+"00%)"},500),s.sel.wrap.classList.remove("test-carousel__no-active"),s.sel.wrap.style.transform="translateX(-"+s.position.current_position+"00%)"},s.sel.prev.addEventListener("click",this.prev_slide),s.sel.next.addEventListener("click",this.next_slide)}var carousel=new Carousel({wrap:".test-carousel__wrap",prev:".test-arrow__left",next:".test-arrow__right"});