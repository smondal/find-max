import {serial as test} from 'ava';
import findMax from '.';

test('arguments', t => {
	t.is(findMax(1, 2, 3, 4), 4);
});

test('array', t => {
	t.is(findMax([1, 2, 3, 4]), 4);
});
