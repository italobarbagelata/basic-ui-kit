import * as React from 'react';
import {styled} from '../../../styled-components';
import * as Styles from './styles';
import {rem} from "polished";
import {Card, Heading, Icon} from "../../index";

// Props for the component
export interface Props {
    className?: string;
    icon: string;
    text: string;
    onClick: Function;
    full?: boolean;
    type?: string;
    variant?: string;
    disabled?: boolean;
}

/* concat styles based on props */
const ButtonWrapper =
    styled('button') <{ variant: string, disabled?: boolean }>
        `
  ${Styles.baseStyles};
  ${(props) => Styles[props.variant]};
  ${(props) => props.disabled && Styles.disabled};
`;

// State for the component
export interface State {
}

const Container = {
    width: '56px',
    margin: '0 auto'
};

const TextStyle = {
    textAlign: 'center' as const,
    color: 'rgb(0, 119, 255)',
    fontWeight: 700
};

const IconStyle = {
    textAlign: 'center' as const,
    display: 'block',
    fontSize: `${rem('28px')}`,
    color: 'rgb(0, 119, 255)'
};

class CircleButton extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        const {text, icon, onClick, variant, disabled} = this.props;
        return (
            <div style={Container}>
                <ButtonWrapper variant={variant} onClick={() => onClick()} disabled={disabled}>
                    <Icon name={icon} style={IconStyle}/>
                </ButtonWrapper>
                <Heading.H4 style={TextStyle}>{text}</Heading.H4>
            </div>
        );
    }
}

export default CircleButton;
