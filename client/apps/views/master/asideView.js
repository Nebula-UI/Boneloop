define(function(require) {
	'use strict';

	var Marionette = require('marionette'),
		AsideTemplate = require('template!templates/master/asideTpl');

	return Marionette.ItemView.extend({
		template: AsideTemplate
	});

});