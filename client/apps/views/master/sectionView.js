define(function(require) {
	'use strict';

	var Marionette = require('marionette'),
		SectionTemplate = require('template!templates/master/sectionTpl');

	return Marionette.ItemView.extend({
		template: SectionTemplate
	});

});