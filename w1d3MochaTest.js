"use strict";

const assert = require("assert");
const methods = require("./codeQuality.js");
const isVowel = methods.isVowel;
const computeSalesCommission = methods.computeSalesCommission;
const calcDownpayment = methods.calcDownpayment;
const convertFahrenheit = methods.convertFahrenheit;
const calcDistance = methods.calcDistance;

//test for  ComputSalesCommission function
describe("test of ComputSalesCommission", function () {
    it("tests salaried and 200 sales", function () {
        assert.strictEqual(computeSalesCommission(true, 200), 0);
    });

    it("tests not salaried and 200 sales", function () {
        assert.strictEqual(computeSalesCommission(false, 200), 0);
    });

    it("tests salaried and 300 sales", function () {
        assert.strictEqual(computeSalesCommission(true, 300), 3);
    });

    it("tests not salaried and 300 sales", function () {
        assert.strictEqual(computeSalesCommission(false, 300), 6);
    });
    
    it("tests salaried and 3500 sales", function () {
        assert.strictEqual(computeSalesCommission(true, 3500), 65);
    });

    it("tests not salaried and 3500 sales", function () {
        assert.strictEqual(computeSalesCommission(false, 3500), 100);
    });
});


describe("calcDownpayment", function () {
    it("calcDownpayment", function () {
        assert.equal(calcDownpayment())
    });
});

//tes for isVowel function
describe("isVowel", function () {
    it("a is vowel", function () {
        assert.equal(isVowel("a"), true);
    });
    it("e is vowel", function () {
        assert.equal(isVowel("e"), true);
    });
    it("i is vowel", function () {
        assert.equal(isVowel("i"), true);
    });
    it("o is vowel", function () {
        assert.equal(isVowel("o"), true);
    });
    it("u is vowel", function () {
        assert.equal(isVowel("u"), true);
    });
    it("z is not vowel", function () {
        assert.equal(isVowel("z"), false);
    });
    it("5 is not vowel", function () {
        assert.equal(isVowel("5"), false);
    });
});

// test for calcDownpayment 

  describe(" test calcDownpayment", function () {
    it("if the cost of the house 40000", function () {
        assert.equal(calcDownpayment(40000), 2000);
    });
    it("if the cost of the house 50000", function () {
        assert.equal(calcDownpayment(50000), 2500);
    });
    it("if the cost of the house 100000", function () {
        assert.equal(calcDownpayment(100000), 7500);
    });

// test for convertFahrenheit 

describe(" test convertFahrenheit", function () {
    it("if the value Fahrenheit is 32", function () {
        assert.equal(convertFahrenheit(32), 0);
    });
    it("if the value Fahrenheit is 32", function () {
        assert.equal(convertFahrenheit(0), -17.7778);
    });
    it("if the value Fahrenheit is 212", function () {
        assert.equal(convertFahrenheit(212), 100);
    });
    it("if the value Fahrenheit is 100", function () {
        assert.equal(convertFahrenheit(100), 37.7778);
    });
  });

// test for calcDistance 

describe(" test calculate the distance", function () {
    it("if the value is  0, 0, 5, 5", function () {
        assert.equal(calcDistance (0, 0, 5, 5), 5);
    });
  });
