describe('sumOfOdds', function () {
    it('adds odd numbers up to 6', function () {
        expect(sumOfOdds(6)).to.equal(9);
    });
    it('adds odd numbers up to 8', function () {
        expect(sumOfOdds(8)).to.equal(16);
    });
    it('adds odd numbers up to 10', function () {
        expect(sumOfOdds(10)).to.equal(25);
    });
    it('adds odd numbers up to 30', function () {
        expect(sumOfOdds(30)).to.equal(225);
    });
    it('adds odd numbers up to and including "1"', function () {
        expect(sumOfOdds(1)).to.equal(1);
    });
    it('adds odd numbers up to and including "9"', function () {
        expect(sumOfOdds(9)).to.equal(25);
    });
    it('adds odd numbers up to and including "11"', function () {
        expect(sumOfOdds(11)).to.equal(36);
    });
    it('adds odd numbers up to and including "31"', function () {
        expect(sumOfOdds(31)).to.equal(256);
    });
});