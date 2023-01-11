import * as React from "react";
import { styled } from "../../styled-components";
import posed, { PoseGroup } from "react-pose";

const BackdropBox = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});

// Props for the component
export interface Props {
  isActive: boolean;
  children: any;
  className?: string;
  onClick?: Function;
}

// State for the component
export interface State {}

const BackdropWrapper = styled(BackdropBox)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(22, 30, 38, 0.6);
  z-index: 50;
`;

class Backdrop extends React.Component<Props, State> {
  // Default props for the component
  public static defaultProps: Props = {
    isActive: false,
    children: null
  };

  constructor(props: Props) {
    super(props);
  }

  render() {
    const { onClick, children, className } = this.props;

    return (
      <PoseGroup>
        {this.props.isActive && (
          <BackdropWrapper key="backdrop">
            {children}
          </BackdropWrapper>
        )}
      </PoseGroup>
    );
  }
}

export default Backdrop;
