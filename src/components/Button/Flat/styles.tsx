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
	display: inline-block;
	font-family: ${fonts.headers};
	outline: none;
	cursor: pointer;
	-webkit-tap-highlight-color: transparent;
	transition: transform 150ms ease-out;
	margin: 8px 0;
	    
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

/* size variants */
export const small = css`width: 50%;`;

export const medium = css`
	margin-left: auto;
	width: 75%;
	margin-right: auto;
`;

export const full = css`width: 100%;`;

export const disabled = css`
	background-color: ${colors.gray};
	color: ${colors.light};
	cursor: not-allowed;
`;