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
    it('returns the square of 15', function () {
        expect(squareNumber(15)).to.equal(225);
    })
    it('returns the square of 20', function () {
        expect(squareNumber(20)).to.equal(400);
    })
})