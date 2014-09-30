define(function(require) {
    'use strict';

    var App = require('app'),
        Backbone = require('backbone'),
        Marionette = require('marionette');

    var NavbarView = require('views/master/navbarView'),
        HeaderView = require('views/master/headerView'),
        SectionView = require('views/master/sectionView'),
        AsideView = require('views/master/asideView'),
        FooterView = require('views/master/footerView');

    return Backbone.Marionette.Controller.extend({

        initialize: function(options) {
            App.navbarRegion.show(new NavbarView());
            App.headerRegion.show(new HeaderView());
            App.sectionRegion.show(new SectionView());
            App.asideRegion.show(new AsideView());
            App.footerRegion.show(new FooterView());
        },

        index: function() {
            App.sectionRegion.show(new SectionView());
        }
    });

});