import { rem } from "polished";
import styled, { css } from "styled-components";
import { colors, fonts } from "../../variables";

const baseStyles = css`
  color: ${props => props.theme.fontColor};
  font-family: ${fonts.headers};
`;

const BigTitle = styled.h1`
  ${baseStyles};
  font-size: 56px;
  line-height: 64px;
`;


const H1 = styled.h1`
  ${baseStyles};
  font-size: 40px;
  line-height: 48px;
`;

const H2 = styled.h2`
  ${baseStyles};
  font-size: 32px;
  line-height: 40px;
`;

const H3 = styled.h3`
  ${baseStyles};
  font-size: 24px;
  line-height: 32px;
`;

const H4 = styled.h4`
  ${baseStyles};
  font-size: 20px;
  line-height: 24px;
`;

const Body = styled.p`
  ${baseStyles};
  font-size: 16px;
  line-height: 24px;
`;

const BodySmall = styled.p`
  ${baseStyles};
  font-size: 12px;
  line-height: 16px;
`;

const Heading = {
  BigTitle,
  H1,
  H2,
  H3,
  H4,
  Body,
  BodySmall,
};

export default Heading;
