describe('digitise', function () {
    it('returns [1] when given the number 1', function () {
        expect(digitise(1)).to.eql([1]);
    });
    it('returns [2,1] when given the number 12', function () {
        expect(digitise(12)).to.eql([2,1]);
    });
    it('returns [1,2,3,2,1] when given the number 12321', function () {
        expect(digitise(12321)).to.eql([1,2,3,2,1]);
    });
    it('returns [1,2,3,4,5] when given the number 54321', function () {
        expect(digitise(54321)).to.eql([1,2,3,4,5]);
    });
    it('returns [5,5,4,4,3,3,2,2,1,1] when given the number 1122334455', function () {
        expect(digitise(1122334455)).to.eql([5,5,4,4,3,3,2,2,1,1]);
    });
});