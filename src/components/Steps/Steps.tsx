import * as React from 'react';
import { rem, em } from 'polished';
import { styled } from '../../styled-components';

import { colors, fonts } from '../../variables';

import { Steps as StepsInterface } from './steps.interface';

import Icon from '../Icon/Icon';

export interface Props {
	totalSteps: number;
	currentStep: number;
}

export interface State {
	value: string;
	focused: boolean;
}

const paintProgressBar = (currentStep: number, totalSteps: number) => {
	if (currentStep === 1 || currentStep < 1) {
		return `linear-gradient(90deg, 
            ${colors.primaryLight} 0%, ${colors.primaryLight} 100%)`;
	} else if (currentStep > totalSteps) {
		return `linear-gradient(90deg, 
                #1ACF67 0%, #1ACF67 100%)`;
	} else {
		return `linear-gradient(90deg, 
            #1ACF67 0%, #0077FF ${currentStep * 100 / totalSteps}%)`;
	}
};

const paintStep = (currentStep: number, totalSteps: number, index: number) => {
	if (currentStep === index) {
		return `${colors.primary}`;
	} else if (index < currentStep) {
		return `${colors.success}`;
	} else {
		return `${colors.primaryLight}`;
	}
};

const StepsContainer = styled.div`
	background-color: white;
	border-radius: 24px;
	padding: 16px;
	margin: 16px 0;
	position: relative;
	transition: all 0.15s ease;
	border: none;
	display: flex;
	align-items: center;
	justify-content: center;
	height: ${em('24px')};
`;

const ProgressbarHolder = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Progessbar =
	styled('div') <
	{ currentStep: number, totalSteps: number } >
	`
  width: 100%;
  height: ${em('4px')};
  background-color: blue;
  background-image: ${(p: StepsInterface) => paintProgressBar(p.currentStep, p.totalSteps)};
`;

const StepsHolder = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Step =
	styled('div') <
	{ currentStep: number, totalSteps: number, index: number } >
	`
  list-style: none;
  border-radius: 50%;
  background-color: ${(p: StepsInterface) => paintStep(p.currentStep, p.totalSteps, p.index)};
  display: block;
  color: ${colors.light};
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${rem('24px')};
  width: ${rem('24px')};
  font-family: ${fonts.headers}
`;

export class Steps extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
	}

	renderSteps = (steps: number): Steps[] => {
		const arrayOfSteps = [];

		for (let index = 0; index < steps; index++) {
			arrayOfSteps.push(index);
		}

		return arrayOfSteps;
	};

	render() {
		const { totalSteps, currentStep } = this.props;

		return (
			<StepsContainer>
				<ProgressbarHolder>
					<Progessbar currentStep={currentStep} totalSteps={totalSteps} />
				</ProgressbarHolder>
				<StepsHolder>
					{this.renderSteps(totalSteps).map((_, index: number) => (
						<Step totalSteps={totalSteps} currentStep={currentStep} index={index + 1} key={index}>
							{index + 1 < currentStep && <Icon name="check" style={{ color: colors.light, fontSize: `${rem('12px')}` }} />}
							{index + 1 >= currentStep && index + 1}
						</Step>
					))}
				</StepsHolder>
			</StepsContainer>
		);
	}
}

export default Steps;
