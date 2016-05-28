// ==UserScript==
// @name         Reader
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Load every Chapter
// @author       You
// @match        http://gravitytales.com/zhan-long/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var elements = document.getElementsByClassName("entry-title"); 
    for (var i = 0; i <elements.length; i++) {
    var el = elements[i];
        el.innerHTML = "cool";
    }
    alert("cool");
})();