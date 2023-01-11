import * as React from 'react';

import {
	InputBox,
	InputText,
	InputLabel,
	InputLabelText,
	InputStatusIconBox,
	InputBoxContentWrapper,
	InputTextButton,
	InputErrorText
} from '../base';

import { Helper } from '../helper.interface';

export interface Props {
	label: string; // Up-Down label for the input
	focused?: boolean;
	errors?: Object; // Errors in the form context in which the input lives
	value?: string; // Value for the input passed as prop (for pre charged values)
	helper?: Helper; // Function passed to the helper button, triggered onClick
	formatter?: Function; // A function passed to format the value of the input (i.e: currency, RUT, etc)
}

export interface State {
	value: string;
	focused: boolean;
}

class Input extends React.Component<Props, State> {
	// Default props for the component
	public static defaultProps: Props = {
		label: 'Nombre'
	};

	// Holds a reference to the Input Element in order to manipulate it (focus)
	private inputRef = React.createRef<HTMLInputElement>();

	constructor(props: Props) {
		super(props);
		this.state = { focused: props.focused || false, value: props.value || '' };
	}

	render() {
		const { label, helper, errors } = this.props;
		const { focused, value } = this.state;

		return (
			<InputBox
				focused={focused}
				errors={errors}
				tabIndex={-1}
				onFocus={() => {
					this.setState({ focused: true });
					this.inputRef.current.focus();
				}}
				onBlur={() => this.setState({ focused: false })}
			>
				<InputBoxContentWrapper>
					<InputLabelText elevated={focused || value.length > 0} focused={focused} errors={errors}>
						{label}
					</InputLabelText>
					<InputText
						onChange={(e) => this.setState({ value: e.target.value })}
						name={label}
					/>
					{errors && <InputErrorText>{errors[0]}</InputErrorText>}
				</InputBoxContentWrapper>
				{helper && (
					<InputStatusIconBox>
						<InputTextButton errors={errors} onClick={() => helper.onHelperClick()}>
							{helper.text}
						</InputTextButton>
					</InputStatusIconBox>
				)}
			</InputBox>
		);
	}
}

export default Input;
