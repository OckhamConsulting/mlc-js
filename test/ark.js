var Buffer = require("buffer/").Buffer;
var should = require("should");
var mlc = require("../index.js");

describe("MLC JS", function () {

	it("should be ok", function () {
		(mlc).should.be.ok;
	});

	it("should be object", function () {
		(mlc).should.be.type("object");
	});

	it("should have properties", function () {
		var properties = ["transaction", "signature", "vote", "delegate", "crypto"];

		properties.forEach(function (property) {
			(mlc).should.have.property(property);
		});
	});

});
