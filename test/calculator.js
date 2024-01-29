import { assert } from 'chai';

describe('Calculator Results', function() {
    let calculation;

    // dynamic importation 
    before(async function() {
        calculation = await import('../app/calculator.cjs');
    });

    // addition test
    describe('add()', function() {
        // PASSED
        it('expected result is 7 with values (5 & 2), SUCCESS', function() {
            assert.equal(calculation.add(5, 2), 7);
        });
        // FAILED
        it('expected result is 8 with values (5 & 2), FAIL', function() {
            assert.notEqual(calculation.add(5, 2), 8);
        });
    });

    // subtraction test
    describe('sub()', function() {
        // PASSED
        it('expected result is 3 with values (5 & 2), SUCCESS', function() {
            assert.equal(calculation.sub(5, 2), 3);
        });
        // FAILED
        it('expected result is 5 with values (5 & 2), FAIL', function() {
            assert.notEqual(calculation.sub(5, 2), 5);
        });
    });

    // multiplication test
    describe('mul()', function() {
        it('expected result is 10 with values (5 & 2), SUCCESS', function() {
            assert.equal(calculation.mul(5, 2), 10);
        });

        it('expected result is 12 with values (5 & 2), FAIL', function() {
            assert.notEqual(calculation.mul(5, 2), 12);
        });
    });

    // division test
    describe('div()', function() {
        it('expected result is 5 with values (10 & 2), SUCCESS', function() {
            assert.equal(calculation.div(10, 2), 5);
        });

        it('expected result is 2 with values (10 & 2), FAIL', function() {
            assert.notEqual(calculation.div(10, 2), 2);
        });
    });
});