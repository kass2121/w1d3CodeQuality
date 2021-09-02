 //3
 function compoundInterest(initialAmount, annualInterestRate, numberOfYears) {
    let rate = annualInterestRate / 100;
    let balance = initialAmount * Math.pow(1 + (rate / 12), 12 * numberOfYears);
    return balance;
}
 describe("test of compoundInterest", function () {
    it("calculate compound interest", function () {
        assert.equal(compoundInterest(100, 10, 1), 110.47);
    });
});

    it("calculate compound interest", function () {
        assert.equal(compoundInterest(10000, 5, 10), 16470.09);
    });
});

    
