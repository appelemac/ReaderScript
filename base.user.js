// ==UserScript==
// @name         Reader
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Load every Chapter
// @author       Appelemac
// @include      http://gravitytales.com/*
// @grant        none
// ==/UserScript==

function allInnerLinks() {
    list = new Array();
    for (var i =0; i< anchors.length; i++) {
        var a = anchors[a];
        if (a.href != null) {
            var str = String(a.href);
            if (str.search(document.location.href) != -1) {
                list[list.length] = str;
            }
        }
    }
    return list;
}

//sort by name
function byName(a, b) {
  var anew = a.toLowerCase();
  var bnew = b.toLowerCase();
  if (anew  == bnew) return 1;
  return 0;
}

(function() {
    'use strict';
    var elements = document.getElementsByClassName("entry-title"); 
    for (var i = 0; i <elements.length; i++) {
    var el = elements[i];
        el.innerHTML = "cool";
    }
    var anchors = document.getElementsByTagName("a");
    var li = allInnerLinks();
    li.sort(vyName);
    alert(li);
    
})();