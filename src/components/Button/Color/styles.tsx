import { css } from 'styled-components';
import { colors, fonts } from '../../../variables';
import { em } from 'polished';

/* styles common to all buttons */
export const baseStyles = css`
	appearance: none;
	font-weight: 700;
	border-radius: 24px;
	border: none;
	font-size:  14px;
    line-height: 22px;
	cursor: pointer;
	padding: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
	font-family: ${fonts.headers};
	outline: none;
    background-color: ${colors.primary};
	color: ${colors.light};
	height: ${em('36px')};
	cursor: pointer;
	-webkit-tap-highlight-color: transparent;
	transition: transform 150ms ease-out;

	&:active {
		transform: scale(.9);
	}
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

/* colors */
export const green = css`
	background-color: ${colors.green};
	color: ${colors.light};
`;
export const orange = css`
	background-color: ${colors.orange};
	color: ${colors.light};
`;
export const red = css`
	background-color: ${colors.red};
	color: ${colors.light};
`;