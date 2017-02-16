// ==UserScript==
// @name         [Dubtrack] CSS & Background
// @namespace    Chr0nX/Dubtrack/CustomDubtrack
// @version      0.1
// @description  Loads custom CSS and background on Dubtrack.
// @author       Chr0nX
// @match        https://*.dubtrack.fm/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var cssUrl = 'https://raw.githubusercontent.com/blatadude/DubtrackScripts/master/frosolfrightBlatadudeEdit.css';  // URL or false to disable
    var backgroundUrl = 'https://i.imgur.com/O1UyuHj.jpg';       // URL or false to disable

    $(document).ready(function () {
        if (cssUrl !== false)
            $('head').append('<link href="' + cssUrl + '" rel="stylesheet" type="text/css">');
        if (backgroundUrl !== false)
            $('body').append('<div class="medium" style="width: 100vw;height: 100vh;z-index: -999998;position: fixed; background: url(' + backgroundUrl + ');background-size: cover;top: 0;"></div>');
    });
})();
