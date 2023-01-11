import * as React from 'react';
import { styled } from '../../../styled-components';
import * as Styles from './styles';

// Props for the component
export interface Props {
	className?: string;
	text: string;
	onClick?: Function;
	full?: boolean;
	type?: string;
	size?: string;
    backgroundColor?: string;
    textColor?: string;
}

/* concat styles based on props */
const ButtonWrapper =
	styled('button') <
	{size: string , textColor: string, backgroundColor: string} >
	`
  ${Styles.baseStyles};
  ${(props) => Styles[props.size]};
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.textColor};
`;

// State for the component
export interface State {}

class Color extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        const {text, onClick, size,textColor, backgroundColor} = this.props;

        return (
            <ButtonWrapper textColor={textColor} backgroundColor={backgroundColor} size={size} onClick={() => onClick()}>
                {text}
            </ButtonWrapper>
        );
    }
}

export default Color;
