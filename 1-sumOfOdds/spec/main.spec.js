describe('sumOfOdds', function () {
    it('adds odd numbers up to "n"', function () {
        expect(sumOfOdds(6)).to.equal(9);
        expect(sumOfOdds(8)).to.equal(16);
        expect(sumOfOdds(10)).to.equal(25);
        expect(sumOfOdds(30)).to.equal(225);
    });
    it('adds odd numbers up to and including "n"', function () {
        expect(sumOfOdds(1)).to.equal(1);
        expect(sumOfOdds(9)).to.equal(25);
        expect(sumOfOdds(11)).to.equal(36);
        expect(sumOfOdds(31)).to.equal(256);
    });
    it('adds odd numbers together for a randomly generated "n"', function () {
        let n = Math.floor(Math.random() * 100);
        const sumOfOddsTest = function(n) {
            let sum = 0;
            for (let i=1; i<=n; i+= 2) {
                sum += i;
            }
            return sum;
        }
        expect(sumOfOdds(n)).to.equal(sumOfOddsTest(n));
    });
})