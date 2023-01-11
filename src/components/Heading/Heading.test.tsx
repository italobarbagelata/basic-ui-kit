import * as React from 'react';
import { shallow } from 'enzyme';

// Component
import Heading from './Heading';

test.skip('Renders an H1 html element', () => {
    const heading = shallow(<Heading.H1>Test</Heading.H1>);
    console.log(heading.type());
    expect(heading.type()).toBe('h1');
});