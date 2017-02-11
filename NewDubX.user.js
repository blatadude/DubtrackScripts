// ==UserScript==
// @name         [Dubtrack] Load new DubX
// @namespace    Chr0nX/Dubtrack/DubX
// @version      0.1.2
// @description  Loads DubX from the new repo.
// @author       Chr0nX
// @match        https://*.dubtrack.fm/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    $(document).ready(function () {
        setTimeout(function () {
            $.getScript('https://rawgit.com/coryshaw1/DubX-Script/master/beta.js');
            $('head').append('<link rel="stylesheet" type="text/css" href="https://rawgit.com/coryshaw1/DubX-Script/master/css/asset.css">');
            $('head').append('<link rel="stylesheet" type="text/css" href="https://rawgit.com/coryshaw1/DubX-Script/master/css/options/autocomplete.css">');
            $('head').append('<link rel="stylesheet" type="text/css" href="https://rawgit.com/coryshaw1/DubX-Script/master/css/options/dubinfo.css">');
            $(document).on('DOMNodeInserted', '.header-right-navigation', function () {
                $('.header-right-navigation .for img').attr('src', 'https://rawgit.com/coryshaw1/DubX-Script/master/params/params.svg');
            });
        }, 2000);
    });
})();