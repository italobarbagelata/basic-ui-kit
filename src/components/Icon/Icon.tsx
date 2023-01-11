import * as React from 'react';
import '../../icomoon.css';

import { styled } from '../../styled-components';
import { colors } from '../../variables';
import { rem } from 'polished';

interface Props {
	name: string;
	className?: string;
	style?: React.CSSProperties;
}

const IconWrapper = styled.i`
	color: ${colors.text};
	font-size: ${rem('16px')};
`;

class Icon extends React.Component<Props, null> {
	public static defaultProps = {
		name: 'test'
	};

	constructor(props: Props) {
		super(props);
	}

	render() {
		const { style, name, className } = this.props;

		return <IconWrapper style={style} className={`afp-cap-${name} ${className || ''}`} />;
	}
};

export default Icon;
