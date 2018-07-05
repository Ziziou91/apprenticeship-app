describe('typeValidation', function () {
    it('returns "true" when given the string "Hello" and the type "string', function () {
        expect(typeValidation('Hello', 'string')).to.equal(true);
    });
    it('returns "true" when given the boolean true and the type "boolean', function () {
        expect(typeValidation(true, 'boolean')).to.equal(true);
    });
    it('returns "false" when given the string "true" and the type "boolean', function () {
        expect(typeValidation('true', 'boolean')).to.equal(false);
    });
    it('returns "true" when given the number 50 and the type "number', function () {
        expect(typeValidation(50, 'number')).to.equal(true);
    });
    it('returns "false" when given the string "50" and the type "number', function () {
        expect(typeValidation('50', 'number')).to.equal(false);
    });
    it('returns "true" when given the object {hello: "world} and the type "object', function () {
        expect(typeValidation({hello: "world"}, 'object')).to.equal(true);
    });
})