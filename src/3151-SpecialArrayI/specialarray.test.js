"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const specialarray_1 = require("./specialarray");
describe('isArraySpecial', () => {
    it('returns true for array with one element', () => {
        (0, chai_1.expect)((0, specialarray_1.isArraySpecial)([1])).to.be.true;
    });
    it('returns true for array with alternating parity', () => {
        (0, chai_1.expect)((0, specialarray_1.isArraySpecial)([2, 1, 4])).to.be.true;
    });
    it('returns false for array with consecutive odd numbers', () => {
        (0, chai_1.expect)((0, specialarray_1.isArraySpecial)([4, 3, 1, 6])).to.be.false;
    });
    it('returns false for array with consecutive even numbers', () => {
        (0, chai_1.expect)((0, specialarray_1.isArraySpecial)([2, 4, 6])).to.be.false;
    });
    it('returns true for array with alternating odd and even numbers', () => {
        (0, chai_1.expect)((0, specialarray_1.isArraySpecial)([1, 2, 3, 4])).to.be.true;
    });
    it('returns true for empty array', () => {
        (0, chai_1.expect)((0, specialarray_1.isArraySpecial)([])).to.be.true;
    });
});
