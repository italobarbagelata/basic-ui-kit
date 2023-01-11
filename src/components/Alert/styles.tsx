import styled from "../../styled-components";
import posed from "react-pose";

const AlertBox = posed.div({
    enter: {
      y: 0,
      opacity: 1,
      transition: {
        y: { type: "spring", stiffness: 1000, damping: 15 },
        default: { duration: 300 }
      }
    },
    exit: {
      y: 50,
      opacity: 0,
      transition: { duration: 150 }
    }
  });


export const AlertWrapper = styled(AlertBox)`
  max-width: 272px;
  z-index: 200;
  display: block;
  position: fixed;
  width: 272px;
  max-width: 272px;
  top: 40%;
  left: 0 !important;
  right: 0 !important;
  margin: auto;
`;

export const AlertTitle = styled.h4`
  text-align: center;
  font-weight: 700;
  font-size: 1.2em;
  margin-bottom: 1em;
`;

export const AlertText = styled.p`
  font-size: 1em;
  text-align: center;
  display: block;
`;

export const AlertButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 24px;
`;

const AlertButton = styled.button`
  appearance: none;
  border: none;
  background-color: transparent;
  font-size: 1.25em;
  font-weight: 700;
`;

export const AlertButtonAccept = styled(AlertButton as any)`
  color: blue;
`;

export const AlertButtonDismiss = styled(AlertButton as any)`
  color: red;
`;
