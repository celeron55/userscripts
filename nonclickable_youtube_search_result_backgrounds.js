// ==UserScript==
// @name        Non-Clickable Youtube Search Result Backgrounds
// @namespace   celeron55
// @include     https://www.youtube.com/results*
// @version     1.0
// @grant       none
// ==/UserScript==

var es = document.querySelectorAll("li.yt-lockup")
for(var i=0; i<es.length; i++){
    es[i].addEventListener("click", function(event){
       event.preventDefault();
       event.stopPropagation();
    }, true);
    es[i].style.cursor = "auto";
}

