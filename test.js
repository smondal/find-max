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

test('array', t => {
	t.is(findMax([1, 2, 3, 4]), 4);
});
