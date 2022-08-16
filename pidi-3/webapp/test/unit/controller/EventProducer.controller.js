/*global QUnit*/

sap.ui.define([
	"pidi-3/controller/EventProducer.controller"
], function (Controller) {
	"use strict";

	QUnit.module("EventProducer Controller");

	QUnit.test("I should test the EventProducer controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
