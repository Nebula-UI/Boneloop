define(function(require) {
    'use strict';

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Marionette = require('marionette');

    var App = new Backbone.Marionette.Application();

    // Organize Application into regions corresponding to DOM elements
    // Regions can contain views, Layouts, or subregions nested as necessary
    App.addRegions({
        navbarRegion: "nav",
        headerRegion: "header",
        asideRegion: "aside",
        sectionRegion: "section",
        footerRegion: "footer"
    });

    App.addInitializer(function(options) {
        Backbone.history.start();
    });

    return App;

});