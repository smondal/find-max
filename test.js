import {serial as test} from 'ava';
import findMax from '.';

test('no arguments pass', t => {
	t.is(findMax(), undefined);
});

test('no array pass', t => {
	t.is(findMax([]), undefined);
});

test('arguments', t => {
	t.is(findMax(1, 2, 3, 4), 4);
});

test('object', t => {
	t.is(findMax({1: 2, 2: 4, 4: 5}), '4');
});

test('string key', t => {
	t.is(findMax({a: 2, b: 4, c: 5}), 'c');
});

test('array', t => {
	t.is(findMax([1, 2, 3, 4]), 4);
});

test('array of array', t => {
	t.is(findMax([1, 2, 3, 4, [6, 12], [9, 10], [2], 8]), 12);
});
