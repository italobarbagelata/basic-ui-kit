import * as React from "react";
import { PoseGroup } from "react-pose";

import {
  BottomModalWrapper,
  BottomModalCloseButton,
  BottomModalTitle
} from "./styles";

export interface Props {
  isActive: boolean;
  title: string;
  onClose: Function;
}

export interface State {}

class BottomModal extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { title, onClose } = this.props;

    return (
      <PoseGroup>
        {this.props.isActive && (
          <BottomModalWrapper key="bottomModal">
            <BottomModalTitle>{title}</BottomModalTitle>
            <BottomModalCloseButton onClick={() => onClose()} />
          </BottomModalWrapper>
        )}
      </PoseGroup>
    );
  }
}

export default BottomModal;
