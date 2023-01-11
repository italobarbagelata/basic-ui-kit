import * as React from 'react';
import posed, { PoseGroup } from 'react-pose';

// Components
import Card from '../Card/Card';

export interface Props {
	isActive: boolean;
	content: React.Component;
}

export interface State {}

const ModalBox = posed.div({
	enter: {
		scale: 1
	},
	exit: {
		scale: 0
	}
});

class Modal extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
	}

	render() {
		const { isActive, content } = this.props;

		return (
			<PoseGroup>
				{isActive && (
					<ModalBox>
						<Card>{content && content}</Card>
					</ModalBox>
				)}
			</PoseGroup>
		);
	}
}

export default Modal;
