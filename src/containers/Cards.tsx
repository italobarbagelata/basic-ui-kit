import * as React from 'react';
import {Card, Heading} from '../components';
import {darkTheme, lightTheme} from '../theme';
import {ThemeProvider} from 'styled-components';

export interface Props {}

class Cards extends React.Component<Props> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <ThemeProvider theme={lightTheme}>
                    <Card></Card>
                </ThemeProvider>
            </React.Fragment>
        );
    }
}

export default Cards
