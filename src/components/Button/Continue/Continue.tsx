import * as React from 'react';
import { styled } from '../../../styled-components';
import { TweenMax } from 'gsap/TweenMax';
import { TweenLite } from 'gsap/TweenLite';
import { TimelineMax } from 'gsap/TimelineMax';
import TimelineLite from 'gsap/TimelineLite';

import * as Styles from './styles';
import Icon from '../../Icon';
import { colors } from '../../../variables';
import { rem } from 'polished';

// Props for the component
export interface Props {
	className?: string;
	text: string;
	onClick?: Function;
	full?: boolean;
	type?: string;
	size?: string;
	disabled?: boolean;
	arrow?: boolean;
	color?: string;
}



/* concat styles based on props */
const ButtonWrapper =
	styled('button') <
	{ size: string, color: string, disabled: boolean } >
	`
  ${Styles.baseStyles};
  ${(props) => Styles[props.size]};
  ${(props) => Styles[props.color]};
  ${(props) => props.disabled && Styles.disabled};
`;

const ButtonStyle = styled.div`
	height: 100%;
	display: flex;
`;

const TextHolder = styled.span`margin-right: ${rem('16px')};`;

// State for the component
export interface State {}

class ContinueButton extends React.Component<Props, State> {
	// Default props for the component
	public static defaultProps: Props = {
		text: 'Continuar'
	};

	// Holds a reference to native elements in order to manipulate and animate them
	private spanRef = React.createRef<HTMLSpanElement>();
	private iconRef = React.createRef<Icon>();
	private buttonWrapperRef = React.createRef<HTMLButtonElement>();
	private arrowSvg = React.createRef<SVGPathElement>();
	private checkSvg = React.createRef<SVGPathElement>();

	constructor(props: Props) {
		super(props);
	}

	onButtonClicked = () => {
		const duration = 0.2;

		const timeLineButton = new TimelineMax();

		timeLineButton
			.addLabel('button')
			.to(
				this.spanRef.current,
				duration,
				{
					autoAlpha: 0,
					width: '0%',
					onComplete: () => {
						this.spanRef.current.remove();
						console.log('TEXT REMOVED');
					}
				},
				'button'
			)
			.to(
				this.buttonWrapperRef.current,
				duration,
				{
					transform: 'translateY(4px)',
					onComplete: () => console.log('BUTTON DOWN FINISHED')
				},
				'button'
			)
			.to(
				this.buttonWrapperRef.current,
				duration,
				{
					backgroundColor: `${colors.success}`,
					onComplete: () => console.log('BACKGROUND CHANGED')
				},
				'button'
			)
			.to(this.buttonWrapperRef.current, duration, {
				transform: 'translateY(0px)'
			});

		// If there is an onClick prop, execute
		this.props.onClick && this.props.onClick();
	};

	render() {
		const { text, onClick, size, disabled, arrow, color} = this.props;

		return (
			<ButtonStyle>
			<ButtonWrapper
				size={size}
				color={color}
				onClick={() => onClick()}
				disabled={disabled}
			>
				<TextHolder>{text}</TextHolder>

				{arrow && <svg width="20px" height="20px" viewBox="0 0 29 28">
					<g id="Atomic" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
						<g id="Forms" transform="translate(-110.000000, -110.000000)">
							<g id="Icons" transform="translate(16.000000, 88.000000)">
								<g id="Icon-/-Next" transform="translate(88.000000, 16.000000)">
									<g id="Group">
										<rect id="Rectangle" fillRule="nonzero" x="0" y="0" width="40" height="40" />
										<path
											d="M25.7714887,22.6540548 L9.16666667,22.6540548 C7.78976271,22.6540548 6.66666667,21.5309588 6.66666667,20.1540548 C6.66666667,18.7771509 7.78976271,17.6540548 9.16666667,17.6540548 L25.777305,17.6540548 L19.077411,10.9266438 C18.1019741,9.95120692 18.1019741,8.37356944 19.077411,7.39813253 C20.0528479,6.42269562 21.6304854,6.42269562 22.6068158,7.39902738 L33.572589,18.3981325 C34.5480259,19.3735694 34.5480259,20.9512069 33.572589,21.9266438 L22.5892557,32.9099772 C21.6138187,33.8854141 20.0361813,33.8854141 19.0607443,32.9099772 C18.0853074,31.9345403 18.0853074,30.3402361 19.0607443,29.3647992 L25.7714887,22.6540548 Z"
											id="Shape"
											fill={color === 'white' ? colors.primary : colors.light}
											ref={this.arrowSvg}
										/>
										<path
											d="M31.25,8.33333333 C30.215,8.33333333 29.2775,8.75333333 28.59875,9.43208333 L24.84875,13.1820833 L16.25,21.7808333 L11.40125,16.9320833 C10.7225,16.2533333 9.785,15.8333333 8.75,15.8333333 C6.678125,15.8333333 5,17.5114583 5,19.5833333 C5,20.6183333 5.42,21.5558333 6.09875,22.2345833 L13.59875,29.7345833 C14.2775,30.4133333 15.215,30.8333333 16.25,30.8333333 C17.285,30.8333333 18.2225,30.4133333 18.90125,29.7345833 L30.15125,18.4845833 L33.90125,14.7345833 C34.58,14.0558333 35,13.1183333 35,12.0833333 C35,10.0114583 33.321875,8.33333333 31.25,8.33333333"
											id="Fill-1"
											fill={color === 'white' ? colors.primary : colors.light}
											ref={this.checkSvg}
											style={{ visibility: 'hidden' }}
										/>
									</g>
								</g>
							</g>
						</g>
					</g>
				</svg>}
			</ButtonWrapper>
			</ButtonStyle>
		);
	}
}

export default ContinueButton;
