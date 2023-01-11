import * as React from 'react';
import { shallow } from 'enzyme';

// Component
import { Card } from '..';

test('Card renders TEST inside', () => {
    const card = shallow(<Card>TEST</Card>);
    
	expect(card.prop('children')).toBe('TEST');
});

test('Card has one children', () => {
	const card = shallow(
		<Card>
			<span>Children</span>
		</Card>
    );
    
	expect(card.children().length).toBe(1);
});
