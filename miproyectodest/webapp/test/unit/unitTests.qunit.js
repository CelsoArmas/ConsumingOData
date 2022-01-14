/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/miproyectodest/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
