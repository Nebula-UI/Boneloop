define(function(require) {
	'use strict';

	var Marionette = require('marionette'),
		NavbarTemplate = require('template!templates/master/navbarTpl');

	return Marionette.ItemView.extend({
		template: NavbarTemplate
	});

});