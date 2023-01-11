import * as React from 'react';
import {Card, Heading} from '../components';
import {darkTheme, lightTheme} from '../theme';
import {ThemeProvider} from 'styled-components';

export interface Props {}

class Headings extends React.Component<Props> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <ThemeProvider theme={lightTheme}>
                    <Heading.BigTitle>Lorem ipsum dolor sit amet</Heading.BigTitle>
                    <Card>
                        <Heading.H1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in commodo sapien,
                            nec laoreet arcu. Vivamus efficitur dapibus enim et vehicula. Aliquam et</Heading.H1>
                        <Heading.H2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in commodo sapien,
                            nec laoreet arcu. Vivamus efficitur dapibus enim et vehicula. Aliquam et </Heading.H2>
                        <Heading.H3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in commodo sapien,
                            nec laoreet arcu. Vivamus efficitur dapibus enim et vehicula. Aliquam et </Heading.H3>
                        <Heading.H4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in commodo sapien,
                            nec laoreet arcu. Vivamus efficitur dapibus enim et vehicula. Aliquam et </Heading.H4>
                        <Heading.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in commodo sapien,
                            nec laoreet arcu. Vivamus efficitur dapibus enim et vehicula. Aliquam et </Heading.Body>
                        <Heading.BodySmall>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in commodo sapien,
                            nec laoreet arcu. Vivamus efficitur dapibus enim et vehicula. Aliquam et </Heading.BodySmall>
                    </Card>
                </ThemeProvider>
            </React.Fragment>
        );
    }
}

export default Headings
