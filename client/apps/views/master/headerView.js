define(function(require) {
	'use strict';

	var Marionette = require('marionette'),
		HeaderTemplate = require('template!templates/master/headerTpl');

	return Marionette.ItemView.extend({
		template: HeaderTemplate
	});

});