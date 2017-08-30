var assert = require('assert');
var timeFormat = require('./timeformat');

describe('timeformat function', function () {
    it('should format second', () => {
        for(let i = 0; i < 60; i++) {
            assert.equal(timeFormat.print(i), `${i} sek.`);
        }
    });

    it('should show "1 min." when passed 60', function () {
        assert.equal(timeFormat.print(60), "1 min.");
    });

    it('should show "2 min. 5 sek." when passed 125', function () {
        assert.equal(timeFormat.print(125), "2 min. 5 sek.");
    });

    it('should show "1 godz. 1 min. 40 sek." when passed 3700', function () {
        assert.equal(timeFormat.print(3700), "1 godz. 1 min. 40 sek.");
    });
});
