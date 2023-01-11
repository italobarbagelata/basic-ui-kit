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
    margin: 8px 0;
	cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
	font-family: ${fonts.headers};
	box-shadow: ${colors.shadowBlue};
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
export const small = css`width: 100%;`;
export const medium = css`
	margin-left: auto;
	margin-right: auto;
`;
export const full = css`width: 100%;`;

export const disabled = css`
	background-color: ${colors.gray};
	color: ${colors.light};
	cursor: not-allowed;
	box-shadow: none;
`;

export const white = css`
	background-color: ${colors.light};
	color: ${colors.primary};
	box-shadow: 0px 4px 8px 0px rgba(52, 69, 89, 0.2);
`;
