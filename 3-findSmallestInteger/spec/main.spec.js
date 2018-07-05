describe('findSmallest Integer', function () {
    it('returns 8 when given the array [ 78, 56, 232, 12, 8 ]', function () {
        expect(findSmallestInteger([ 78, 56, 232, 12, 8 ])).to.equal(8);
    });
    it('returns 12 when given the array [ 78, 56, 232, 12, 18 ]', function () {
        expect(findSmallestInteger([ 78, 56, 232, 12, 18 ])).to.equal(12);
    });
    it('returns 56 when given the array [ 78, 56, 232, 412, 228 ]', function () {
        expect(findSmallestInteger([ 78, 56, 232, 412, 228 ])).to.equal(56);
    });
    it('returns 12 when given the array [ 78, 56, 232, 12, 18 ]', function () {
        expect(findSmallestInteger([ 78, 56, 232, 12, 18 ])).to.equal(12);
    });
    it('returns 0 when given the array [ 78, 56, 232, 12, 0 ]', function () {
        expect(findSmallestInteger([ 78, 56, 232, 12, 0 ])).to.equal(0);
    });
    it('returns 1 when given the array [ 1, 56, 232, 12, 8 ]', function () {
        expect(findSmallestInteger([ 1, 56, 232, 12, 8 ])).to.equal(1);
    });
});