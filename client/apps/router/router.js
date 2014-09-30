define(function(require) {
	'use strict';

	var Marionette = require('marionette'),
		Controller = require('controllers/controller');

	return Marionette.AppRouter.extend({
		//"index" must be a method in AppRouter's controller
		appRoutes: {
			"": "index"
		}
	});

});