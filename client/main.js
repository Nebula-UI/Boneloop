/***
 * The goal of this file is mainly to intialize require.js AMD module loader configuration.
 */
requirejs.config({
    /***
     * The path where your JavaScripts files are located.
     */
    baseUrl: './apps/',

    /***
     * Path config is also part of Require and allows to define paths for vendors
     * not found directly under baseUrl.
     * See http://requirejs.org/docs/api.html#config-paths for details.
     */
    paths: {
        /*** List of frameworks/libraries to be included in the codebase. ***/
        /* Core */
        'jquery': '../systems/libs/jquery/jquery.min',
        'underscore': '../systems/libs/support/underscore.min',
        'backbone': '../systems/libs/backbone/backbone.min',
        'marionette': '../systems/libs/backbone/framework/backbone.marionette.min',
        'handlebars': '../systems/libs/handlebars/handlebars.min',

        /* Backbone/Merionette plugins */
        'backbone.babysitter': '../systems/libs/backbone/framework/backbone.babysitter',
        'backbone.wreqr': '../systems/libs/backbone/framework/backbone.wreqr',

        /* Require plugins */
        'text': '../systems/libs/require/plugins/text.min',

        /* Other system utilities */
        'template': '../systems/utilities/hd-template-mapper',
        'templates': '../../templates'
    },

    /***
     * shim config is part of `Require 2.0`_ and allows to Configure the dependencies
     * and exports for older, traditional “browser globals” scripts that do not use
     * define() to declare the dependencies and set a module value.
     * See http://requirejs.org/docs/api.html#config-shim for more details.
     */
    shim: {
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'backbone.babysitter': {
            deps: ['backbone'],
            exports: 'backbone.babysitter'
        },
        'backbone.wreqr': {
            deps: ['backbone'],
            exports: 'backbone.wreqr'
        },
        'marionette': {
            deps: ['backbone.babysitter', 'backbone.wreqr', 'backbone'],
            exports: 'Marionette'
        },
        'text': {
            exports: 'text'
        },
        'handlebars': {
            exports: 'Handlebars'
        }
    }
});

require(['app', 'router/router', 'controllers/controller'], function(App, Router, Controller) {
    App.router = new Router({
        controller: new Controller()
    });
    App.start();
});