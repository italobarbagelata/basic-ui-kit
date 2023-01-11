import * as React from "react";
import { PoseGroup } from "react-pose";

import {
  AlertWrapper,
  AlertTitle,
  AlertButtonAccept,
  AlertButtons,
  AlertButtonDismiss,
  AlertText
} from "./styles";

// UI Components
import { Card } from "..";

// Props for the component
export interface Props {
  /**
   * Wether the alert should be shown or not
   */
  isActive: boolean;
  /**
   * For styled-components is able to modify the components style
   */
  className?: string;
  /**
   * The main title of the alert
   */
  title?: string;
  text?: string;
  onAccept?: Function;
  onDismiss?: Function;
  onAcceptText?: string;
  onDismissText?: string;
}

// State for the component
export interface State {}

class Alert extends React.Component<Props, State> {
  // Default props for the component
  public static defaultProps: Props = {
    isActive: false
  };

  constructor(props: Props) {
    super(props);
  }

  render() {
    const {
      title,
      text,
      onAccept,
      onDismiss,
      onAcceptText,
      onDismissText
    } = this.props;

    return (
      <PoseGroup>
        {this.props.isActive && (
          <AlertWrapper key="alert">
            <Card>
              <AlertTitle>{title}</AlertTitle>
              <AlertText>{text}</AlertText>
              <AlertButtons>
                {onAccept && (
                  <AlertButtonAccept onClick={() => onAccept()}>
                    {onAcceptText}
                  </AlertButtonAccept>
                )}
                {onDismiss && (
                  <AlertButtonDismiss onClick={() => onDismiss()}>
                    {onDismissText}
                  </AlertButtonDismiss>
                )}
              </AlertButtons>
            </Card>
          </AlertWrapper>
        )}
      </PoseGroup>
    );
  }
}

export default Alert;
