import {serial as test} from 'ava';
import findMax from '.';

test('foo', t => {
	t.is(findMax('sandip'), 'sandip');
});
