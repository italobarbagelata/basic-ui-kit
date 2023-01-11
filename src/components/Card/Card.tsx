import * as React from "react";
import { styled, withTheme } from "../../styled-components";

import { colors } from '../../variables';


// Props for the component
export interface Props {
  message?: string;
  className?: string;
  children?: any;
  floatable?: boolean;
  light?: boolean;
  shadow?: boolean;
}

// State for the component
export interface State {}

const CardWrapper = styled("div")<{ floatable?: boolean , light?: boolean, shadow?: boolean }>`
  background-color: ${props => props.theme.cardBackgroundColor};
  border-radius: 32px;
  padding: 8px 16px;
  margin: 16px 0;
  box-shadow: ${(e: Props) => e.shadow === false ? 'none' :  colors.shadow};
  position: relative;
  transition: all 0.15s ease;
  border: none;
`;

class Card extends React.Component<Props, State> {
  // Default props for the component
  public static defaultProps: Props = {
    message: "World"
  };

  constructor(props: Props) {
    super(props);
  }

  render() {
    return <CardWrapper {...this.props} >{this.props.children}</CardWrapper>;
  }
}

export default Card;
