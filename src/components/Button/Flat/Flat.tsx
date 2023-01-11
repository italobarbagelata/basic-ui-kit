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
	disabled?: boolean;
}

/* concat styles based on props */
const ButtonWrapper =
	styled('button') <
	{ size: string, variant: string, disabled?: boolean } >
	`
  ${Styles.baseStyles};
  ${(props) => Styles[props.size]};
  ${(props) => Styles[props.variant]};
  ${(props) => props.disabled && Styles.disabled};
`;

// State for the component
export interface State {}

class FlatButton extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
	}

	render() {
		const { text, onClick, size, variant, disabled } = this.props;

		return (
			<ButtonWrapper size={size} variant={variant} onClick={() => onClick()} disabled={disabled}>
				{text}
			</ButtonWrapper>
		);
	}
}

export default FlatButton;
