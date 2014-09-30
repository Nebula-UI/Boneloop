define(function(require) {
	'use strict';

	var Marionette = require('marionette'),
		FooterTemplate = require('template!templates/master/footerTpl');

	return Marionette.ItemView.extend({
		template: FooterTemplate
	});

});