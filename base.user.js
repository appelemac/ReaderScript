// ==UserScript==
// @name         Reader
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Load every Chapter
// @author       Appelemac
// @include      http://gravitytales.com/*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @grant        none
// ==/UserScript==

function allInnerLinks() {
    var urls= [];
    for (var i= document.links.length; i-->0;)
        if (document.links[i].hostname===location.hostname)
            urls.push(document.links[i].href);
    return urls;
}

//sort by name
function byName(a, b) {
    var anew = a.toLowerCase();
    var bnew = b.toLowerCase();
    if (anew  == bnew) return 1;
    return 0;
}
//get main element
function busybody() {
//I'll leave it at the most basic one for now
    var entrycontent = $("div[class*='entry-content']");
    if (entrycontent !== undefined) {
        var header = $(("div[class*='emtry-header']"));
        if (header !== undefined) return entrycontent.add(header);
        return entrycontent;
    }
}


(function() {
    'use strict';
    var elements = document.getElementsByClassName("entry-title"); 
    for (var i = 0; i <elements.length; i++) {
        var el = elements[i];
        el.innerHTML = "cool";
    }

    var li = allInnerLinks();
    li.sort(byName);
    
    alert(busybody());

})();
