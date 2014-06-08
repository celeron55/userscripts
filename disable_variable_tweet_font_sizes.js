// ==UserScript==
// @name        Disable variable tweet font sizes
// @namespace   celeron55
// @include     https://twitter.com/*
// @version     1.0
// @grant       none
// ==/UserScript==

/*function set_style(){
    GM_addStyle("\
       .ProfileTweet--high .ProfileTweet-text { font-size: 16px !important; } \
       .js-tweet-text { font-size: 16px !important; } \
    ");
}

setTimeout(set_style, 0)
setTimeout(set_style, 1000)
setTimeout(set_style, 3000)*/

function set_element_style(){
    var es = document.querySelectorAll(".ProfileTweet-text")
    for(var i=0; i<es.length; i++){
        es[i].style.fontSize = "16px";
    }
}

setTimeout(set_element_style, 0)
setTimeout(set_element_style, 1000)
setTimeout(set_element_style, 5000)

var will_set_style = false

window.onscroll = function(e){
    if(will_set_style)
        return;
    will_set_style = true;
    setTimeout(function(){
        will_set_style = false;
        set_element_style();
    }, 1000);
}