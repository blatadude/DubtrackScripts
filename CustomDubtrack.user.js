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

    var cssUrl = 'https://frosolf.github.io/frosolfright.css';  // URL or false to disable
    var backgroundUrl = 'http://i.imgur.com/NE2KeUK.jpg';       // URL or false to disable

    $(document).ready(function () {
        if (cssUrl !== false)
            $('head').append('<link href="' + cssUrl + '" rel="stylesheet" type="text/css">');
        if (backgroundUrl !== false)
            $('body').append('<div class="medium" style="width: 100vw;height: 100vh;z-index: -999998;position: fixed; background: url(' + backgroundUrl + ');background-size: cover;top: 0;"></div>');
    });
})();