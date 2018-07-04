describe('squareNumber', function () {
    it('returns the square of 0', function () {
        expect(squareNumber(0)).to.equal(0);
    });
    it('returns the square of 2', function () {
        expect(squareNumber(2)).to.equal(4);
    })
    it('returns the square of 9', function () {
        expect(squareNumber(9)).to.equal(81);
    })
    it('returns the square of random number', () => {
        const randNum = Math.round(Math.random() * 100)
        const randSquare = Math.pow(randNum, 2);
        expect(squareNumber(randNum)).to.equal(randSquare)
    })
})