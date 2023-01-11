import * as React from 'react';
import { styled } from '../../../styled-components';

import * as Styles from './styles';

// Props for the component
export interface Props {
	className?: string;
	text: string;
	onClick: Function;
	full?: boolean;
	type?: string;
	size?: string;
	variant?: string;
}

/* concat styles based on props */
const ButtonWrapper =
	styled('button') <
	{ size: string, variant: string } >
	`
  ${Styles.baseStyles};
  ${(props) => Styles[props.size]};
  ${(props) => Styles[props.variant]};
`;

// State for the component
export interface State {}

class FilledButton extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
	}

	render() {
		const { text, onClick, size, variant } = this.props;

		return (
			<ButtonWrapper size={size} variant={variant} onClick={() => onClick()}>
				{text}
			</ButtonWrapper>
		);
	}
}

export default FilledButton;
