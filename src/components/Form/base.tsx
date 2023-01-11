import { css } from 'styled-components';
import { rem, em } from 'polished';
import styled from '../../styled-components';

import { colors, fonts } from '../../variables';

/**
 * Calculates the color of the input's border
 * @param i The input object
 */
const calculateBorder = (i: Input) => {
	const { errors, focused } = i;

	if (errors) {
		return `2px solid ${colors.alert}`;
	}

	if (focused && !errors) {
		return `2px solid ${colors.primary}`;
	}
};

/**
 * Calculates the color of the input's label
 * @param i The input object
 */
const calculateLabel = (i: Input) => {
	const { errors, focused, elevated } = i;

	if (focused && errors) {
		return `${colors.alert}`;
  }
  
  if (elevated && errors) {
    return `${colors.alert}`;
  }

	if (focused && !errors) {
		return `${colors.primary}`;
	}
};

export interface Input {
	focused?: boolean;
	errors?: Object;
	elevated?: boolean;
}

export const baseBox = css`
	border: 1px solid #c2c7cd;
	border-radius: ${rem('16px')};
	padding: ${em('8px')};
	position: relative;
	margin: ${rem('16px')} 0;
	min-height: ${rem('56px')};
`;

export const InputBox =
	styled('div') <
	{ focused: boolean, errors: Object } >
	`
  ${baseBox};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: ${(p: Input) => calculateBorder(p)};
`;

export const InputBoxContentWrapper = styled.div`
	flex-grow: 2;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const InputLabel = styled.label`
	font-size: ${rem('16px')};
	line-height: ${rem('16px')};
	position: relative;
	display: block;
	width: 100%;
	color: ${colors.text};
`;

export const InputLabelText =
	styled('span') <
	{ focused: boolean, elevated: boolean, errors: Object } >
	`
  display: block;
  font-family: ${fonts.generalText};
  color: ${(p: Input) => calculateLabel(p)};
  transition: all 0.15s ease;
  font-weight: ${(p: Input) => (p.elevated ? 700 : 400)};
  line-height: ${(p: Input) => (p.elevated ? rem('16px') : rem('16px'))};
  font-size: ${(p: Input) => (p.elevated ? rem('12px') : rem('16px'))};
  transform: ${(p: Input) => (p.elevated ? `translateY(${rem('0px')})` : `translateY(${rem('14px')})`)};
`;

export const InputText = styled.input`
	border: none;
	outline: none;
	background-color: transparent;
	width: 100%;
	margin-top: ${rem('6px')};
	height: ${rem('16px')};
	font-size: ${rem('16px')};
	font-weight: 600;
	font-family: ${fonts.generalText};
	padding: 0;
	color: ${colors.text};
`;

export const InputStatusIconBox = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-grow: 1;
`;

export const InputTextButton =
	styled('button') <
	{ errors: Object } >
	`
  appearance: none;
  padding: ${em('12px')} ${em('4px')};
  border-radius: 25px;
  font-size: ${rem('12px')};
  font-family: ${fonts.generalText};
  font-weight: 700;
  border: none;
  color: ${colors.light};
  width: 100%;
  line-height: ${rem('16px')};
  background-color: ${(p: Input) => (p.errors ? `${colors.alert}` : `${colors.primary}`)};
  box-shadow: ${colors.shadow}
`;

export const InputErrorText = styled.span`
	color: ${colors.alert};
	font-weight: 700;
	font-size: ${rem('12px')};
	font-family: ${fonts.generalText};
	display: block;
	line-height: ${rem('16px')};
`;
