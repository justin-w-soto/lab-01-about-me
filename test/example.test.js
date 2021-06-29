// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { correctAnswer } from './utils.js';

const test = QUnit.test;

test('should return true for "yes" strings', assert => {
    const yesString = 'yes';
    const expected = true;
    const actual = correctAnswer(yesString);
    assert.equal(actual, expected);
});

test('should return true for "y" strings', assert => {
    const yesString = 'y';
    const expected = true;
    const actual = correctAnswer(yesString);
    assert.equal(actual, expected);
});


test('should return true for uppercase YES strings', assert => {
    const yesString = 'YES';
    const expected = true;
    const actual = correctAnswer(yesString);
    assert.equal(actual, expected);
});

test('should return false for non yes-y string', expect => {
    const no = 'no';
    const expected = false;
    const actual = correctAnswer(no);
    expect.equal(actual, expected);
});