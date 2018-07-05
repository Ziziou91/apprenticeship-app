describe('countChars', function () {
    describe('countChars function', function () {
        it('should be a function', function () {
            expect(countChars).to.be.a('function');
        });
        it('should return "2" when given string "hello" and char "l"', function () {
            expect(countChars('hello', 'l')).to.equal(2);
        });
        it('should return "1" when given string "hello" and char "o"', function () {
            expect(countChars('hello', 'o')).to.equal(1);
        });
        it('should return "0" when given string "cats" and char "l"', function () {
            expect(countChars('cats', 'l')).to.equal(0);
        });
        it('should return "3" when given string "a slightly longer string" and char "l"', function () {
            expect(countChars('a slightly longer string', 'l')).to.equal(3);
        });    
        it('should return the correct number when given a longer string a char', function () {
            expect(countChars('octopus pie is quite delicious but probably not environmentally sustainable', 's')).to.equal(5);
        });      
    });
});