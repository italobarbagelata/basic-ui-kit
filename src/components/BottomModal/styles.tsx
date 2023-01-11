import styled from "../../styled-components";
import posed from "react-pose";
import { rem } from "polished";

const BottomModalBox = posed.div({
  enter: {
    y: "0%",
    transition: {
      default: { duration: 200 }
    }
  },
  exit: {
    y: "100%",
    transition: {
      default: { duration: 100 }
    }
  }
});

export const BottomModalWrapper = styled(BottomModalBox)`
  z-index: 150;
  display: block !important;
  position: fixed !important;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px;
  background-color: #EFF6FF;
`;

export const BottomModalTitle = styled.h4`
  text-align: left;
  font-weight: 700;
  font-size: 1.2em;
  margin-bottom: 1em;
`;

export const BottomModalCloseButton = styled.span`
  height: ${rem('24px')};
  width: ${rem('24px')};
  background-color: red;
  position: absolute;
  right: ${rem('16px')};
  top: ${rem('16px')};
  border-radius: 50%;
`;
