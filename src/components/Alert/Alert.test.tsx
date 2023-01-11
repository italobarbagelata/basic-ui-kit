import * as React from 'react';
import { shallow } from 'enzyme';

// Component
import { Alert } from '..';

test.skip('Alert renders', () => {
	const alert = shallow(
		<Alert
			isActive={true}
			title={'This is a test'}
			text={'Lorem Ipsum'}
			onAccept={() => console.log('ACCEPT')}
			onDismiss={() => console.log('DISMISS')}
			onAcceptText="Aceptar"
			onDismissText="Fuck"
		/>
    );
    
	expect(alert.prop('title')).toBe('This is a test');
}); 

