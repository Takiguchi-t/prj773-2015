"use strict";Array.prototype.find||(Array.prototype.find=function(a){if(null===this)throw new TypeError("Array.prototype.find called on null or undefined");if("function"!=typeof a)throw new TypeError("predicate must be a function");for(var b,c=Object(this),d=c.length>>>0,e=arguments[1],f=0;f<d;f++)if(b=c[f],a.call(e,b,f,c))return b}),NodeList.prototype.forEach=NodeList.prototype.forEach||function(a,b){b=b||window;for(var c=this.length,d=0;d<c;d++)a.call(b,this[d],d,this)},String.prototype.includes||Object.defineProperty(String.prototype,"includes",{enumerable:!1,writable:!0,value:function(a,b){'use strict';return"number"!=typeof b&&(b=0),!(b+a.length>this.length)&&-1!==this.indexOf(a,b)}}),Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{enumerable:!1,writable:!0,value:function(a){'use strict';var b=Object(this),c=parseInt(b.length)||0;if(0===c)return!1;var d,e=parseInt(arguments[1])||0;0<=e?d=e:(d=c+e,0>d&&(d=0));for(var f;d<c;){if(f=b[d],a===f||a!==a&&f!==f)return!0;d++}return!1}}),"use strict";var pc_only=document.querySelectorAll(".pc_only"),sp_only=document.querySelectorAll(".sp_only");function toggleDisplay(){var a=window.innerWidth;480<a?(pc_only.forEach(function(a){return a.style.display="block"}),sp_only.forEach(function(a){return a.style.display="none"})):(pc_only.forEach(function(a){return a.style.display="none"}),sp_only.forEach(function(a){return a.style.display="block"}))}window.addEventListener("resize",toggleDisplay),toggleDisplay(),$(function(){var a=$("#page_top");a.hide(),$(window).scroll(function(){100<$(this).scrollTop()?a.fadeIn():a.fadeOut()}),a.click(function(){window.scrollTo({top:0,behavior:"smooth"})})}),$(function(){$("[href^=\"#\"]").click(function(){var a=$(this).attr("href"),b=$("#"==a||""==a?"html":a),c=b.offset().top-83;return $("html, body").animate({scrollTop:c},200,"swing"),!1})});function toggleButton(a){event.preventDefault();var b=document.getElementById(a);if(b.classList.contains("toggleOpen")?b.classList.remove("toggleOpen"):b.classList.add("toggleOpen"),"search_form"==a){var c=document.getElementById("gnav");c.classList.contains("hideTemp")?c.classList.remove("hideTemp"):c.classList.add("hideTemp")}}function toggleClosen(a){event.preventDefault();var b=document.getElementById(a);b.classList.contains("toggleClose")?b.classList.remove("toggleClose"):b.classList.add("toggleClose")}function toggle(a){event.preventDefault();for(var b,c=document.querySelectorAll(a),d=0;d<c.length;d++)b=c[d],b.classList.contains("toggleOpen")&&b.classList.remove("toggleOpen")}var currentPos=window.pageYOffset;function followingHeader(){for(var a,b=document.querySelectorAll(".navItem"),c=0;c<b.length;c++)a=b[c],a.classList.contains("toggleOpen")&&a.classList.remove("toggleOpen");var d,e=window.pageYOffset,f=document.querySelector("body"),g=document.querySelector("header"),h=4*g.clientHeight,j=document.querySelector(".following_top");e>h?(f.classList.add("following"),f.style.paddingTop=g.clientHeight+"px"):(f.classList.remove("following"),g.style.top="-100px",f.style.paddingTop="0px"),d=!!(currentPos>=e),e>h&&!1==d?g.style.top="-100px":e>h&&(g.style.top=d?"00px":"-100px",g.style.top="00px");var k=window.innerHeight-document.querySelector(".footer-cont").getBoundingClientRect().top;0<k?j.classList.add("stop"):j.classList.remove("stop"),currentPos=e}window.addEventListener("scroll",followingHeader,{passive:!0});function showMegaDrop(a){var b=document.getElementById(a),c=b.firstElementChild;c.addEventListener("click",function(){event.preventDefault()})}function hideMegaDrop(a){var b=window.pageYOffset,c=document.getElementById(a);c.classList.remove("toggleOpen"),window.addEventListener("scroll",function(){var a=window.pageYOffset;a!==b&&c.classList.remove("toggleOpen")})}function flipImages(){console.log("el");for(var a=document.querySelectorAll(".flipImage"),b=function(b){function c(a,b){e.style.transition=".3s",e.style.opacity=".7",setTimeout(function(){e.setAttribute("src",f.replace(a,b))},150),setTimeout(function(){e.style.opacity="1"},300)}var d=a[b],e=d.querySelector("img"),f=e.getAttribute("src");d.addEventListener("mouseover",function(){c(".","_flip.")}),d.addEventListener("mouseout",function(){c("_flip.",".")})},c=0;c<a.length;c++)b(c)}flipImages();var dropDownsEls=document.querySelectorAll(".dropDown");function toggleDrop(){for(var a=event.target.dataset.id,b=0;b<dropDownsEls.length;b++){var c=dropDownsEls[b],d=c.parentNode;a===c.dataset.id?(event.preventDefault(),d.classList.contains("toggleOpen")?d.classList.remove("toggleOpen"):d.classList.add("toggleOpen")):d.classList.remove("toggleOpen")}}function showMsg(a,b){event.preventDefault();var c=document.getElementById(b),d=c.querySelector("h1"),e=d.innerText;c.classList.contains("shoMsg")||(setTimeout(function(){c.classList.add("shoMsg"),d.innerText=a},100),setTimeout(function(){c.classList.remove("shoMsg"),d.innerText=e},2500))}