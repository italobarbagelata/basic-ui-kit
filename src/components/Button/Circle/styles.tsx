import { css } from 'styled-components';
import { colors, fonts } from '../../../variables';
import { em } from 'polished';

/* styles common to all buttons */
export const baseStyles = css`
	appearance: none;
	font-weight: 700;
	border-radius: 24px;
	border: none;
	font-size:  20px;
    line-height: 24px;
	cursor: pointer;
	height: ${em('36px')};
	display: flex;
    align-items: center;
    justify-content: center;
	font-family: ${fonts.headers};
	outline: none;
	cursor: pointer;
	-webkit-tap-highlight-color: transparent;
	transition: transform 150ms ease-out;
	margin: 8px 0;
	background: rgb(208, 229, 255);
    border-radius: 50px;
    height: 56px;
    width: 56px;
    color: rgb(0, 119, 255) !important;
    
	&:active {
		transform: scale(.9);
	}
	
`;

/* theme variants */
export const primary = css`
	background-color: ${colors.primaryLight};
	color: ${colors.primary};
`;
export const secondary = css`
	background-color: ${colors.light};
	color: ${colors.primary};
`;
export const alert = css`
	background-color: ${colors.alertLight};
	color: ${colors.alert};
`;

export const disabled = css`
	background-color: ${colors.gray};
	color: ${colors.light};
	cursor: not-allowed;
`;