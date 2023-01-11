import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Card, Backdrop, Alert, BottomModal, Button, Heading, Input, Steps, Icon } from './components';
import { styled } from './styled-components';
import { rem } from 'polished';

import { ThemeProvider } from './styled-components';

import { lightTheme } from './theme';

const IconsRow = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: ${rem('16px')} 0;
`;

const Background = styled.div`
	display: flex;
	align-items: center;
	padding: ${rem('16px')} 0;
    overflow: hidden;


    /* ===== Scrollbar CSS ===== */
    /* Firefox */
    * {
        scrollbar-width: auto;
        scrollbar-color: #8f54a0 transparent;
    }

    /* Chrome, Edge, and Safari */
    *::-webkit-scrollbar {
        width: 16px;
    }

    *::-webkit-scrollbar-track {
        background: transparent;
        border-radius: 30px;
    }

    *::-webkit-scrollbar-thumb {
        background-color: #8f54a0;
        border-radius: 10px;
        border: 3px solid #ffffff;
    }
`;

const Phone = styled.div`
    width: 317px;
    height: 626px;
    border: 10px solid black;
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    overflow-y: auto;
`;

const Tablet = styled.div`
    width: 100%;
    height: 626px;
    border: 10px solid black;
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    overflow-y: auto;
`;

const BackgroundPhone = styled.div`
    background-color: #e7ebff;
    padding: 16px;
`;

export interface Props {}

export interface State {
    isBackdropVisible: boolean;
    isAlertVisible: boolean;
    isBottomModalVisible: boolean;
    totalSteps: number;
    currentStep: number;
}

class All extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            isBackdropVisible: false,
            isAlertVisible: false,
            isBottomModalVisible: false,
            totalSteps: 4,
            currentStep: 0
        };
    }

    componentDidMount() {
        setInterval(() => this.setState({ currentStep: this.state.currentStep + 1 }), 3000);
    }

    render() {
        return (
            <ThemeProvider theme={lightTheme}>
                <React.Fragment>
                <Background>
                    <Phone>
                        <BackgroundPhone>
                            <Heading.H1>SIMPLE UIKIT</Heading.H1>
                            <Heading.H1>Ejemplo de una libreria basica</Heading.H1>
                            <Card>
                                <Heading.H2>Titulo</Heading.H2>
                                <Heading.H3>Dentro de la cards esta la descripción</Heading.H3>
                            </Card>
                            <Card light={true} shadow={false}>
                                <Heading.H2>Inputs</Heading.H2>
                                <Input label="Nombre" />
                                <Input
                                    label="Apellido"
                                    helper={{ text: 'Ayuda', onHelperClick: () => console.log('ayuda') }}
                                    errors={[ 'Error uno' ]}
                                />
                                <Input label="Telefono" />
                            </Card>
                            <Card>
                                <Steps totalSteps={this.state.totalSteps} currentStep={this.state.currentStep} />
                            </Card>
                            <Card>
                                <IconsRow>
                                    <Icon name="back" style={{ fontSize: `${rem('40px')}` }} />
                                    <Icon name="bloq" style={{ fontSize: `${rem('40px')}` }} />
                                    <Icon name="check" style={{ fontSize: `${rem('40px')}` }} />
                                    <Icon name="close" style={{ fontSize: `${rem('40px')}` }} />
                                </IconsRow>
                                <IconsRow>
                                    <Icon name="date" style={{ fontSize: `${rem('40px')}` }} />
                                    <Icon name="loader" style={{ fontSize: `${rem('40px')}` }} />
                                    <Icon name="loader" style={{ fontSize: `${rem('40px')}` }} />
                                    <Icon name="loader" style={{ fontSize: `${rem('40px')}` }} />
                                </IconsRow>
                                <IconsRow>
                                    <Icon name="date" style={{ fontSize: `${rem('40px')}` }} />
                                    <Icon name="loader" style={{ fontSize: `${rem('40px')}` }} />
                                    <Icon name="loader" style={{ fontSize: `${rem('40px')}` }} />
                                    <Icon name="loader" style={{ fontSize: `${rem('40px')}` }} />
                                </IconsRow>
                                <IconsRow>
                                    <Icon name="date" style={{ fontSize: `${rem('40px')}` }} />
                                    <Icon name="loader" style={{ fontSize: `${rem('40px')}` }} />
                                    <Icon name="loader" style={{ fontSize: `${rem('40px')}` }} />
                                    <Icon name="loader" style={{ fontSize: `${rem('40px')}` }} />
                                </IconsRow>
                            </Card>

                            <Card>
                                <Button.Filled text="Continuar" onClick={() => console.log('test')} size="full" variant="primary" />
                            </Card>
                            <Card>
                                <Button.Filled text="Borrar" onClick={() => console.log('test')} size="full" variant="secondary" />
                            </Card>

                            <Card>
                                <Button.Flat text="Informaciones" onClick={() => console.log('test')} size="full" variant="primary" />
                            </Card>
                            <Card>
                                <Button.Flat text="Advertencia" onClick={() => console.log('test')} size="full" variant="alert" />
                            </Card>

                            <Button.Flat text="Aceptar" onClick={() => console.log('test')} size="full" variant="secondary" />



                            <Card>
                                <Button.Color backgroundColor="rgb(26, 207, 103)" text="Guardar" onClick={() => console.log('test')} size="full"/>
                            </Card>
                            <Card>
                                <Button.Color backgroundColor="rgb(255, 82, 82)" text="Borrar" onClick={() => console.log('test')} size="medium" />
                            </Card>
                            <Card>
                                <Button.Color backgroundColor="rgb(254, 194, 69)" text="Importante" onClick={() => console.log('test')} size="small" />
                            </Card>

                            <Card>
                                <Button.Continue disabled={false} onClick={() => console.log('BUTTON PRESSED')} size="full" />
                                <Button.Continue arrow={true} disabled={false} onClick={() => console.log('BUTTON PRESSED')} size="full" />
                                <Button.Continue color="white" arrow={true} disabled={false} onClick={() => console.log('BUTTON PRESSED')} size="full" />
                            </Card>
                            <Card>
                                <Button.Continue disabled={true} onClick={() => console.log('BUTTON PRESSED')} size="full" />
                            </Card>
                            <Card>
                                <Button.Circle icon={'question'} text={"Ayuda"} onClick={() => console.log('test')}  variant="primary" />
                            </Card>
                        </BackgroundPhone>
                    </Phone>
                    <Tablet>
                        <BackgroundPhone>
                            <Heading.H1>SIMPLE UIKIT</Heading.H1>
                            <Heading.H1>Ejemplo de una libreria basica</Heading.H1>
                            <Card>
                                <Heading.H2>Titulo</Heading.H2>
                                <Heading.H3>Dentro de la cards esta la descripción</Heading.H3>
                            </Card>
                            <Card light={true} shadow={false}>
                                <Heading.H2>Inputs</Heading.H2>
                                <Input label="Nombre" />
                                <Input
                                    label="Apellido"
                                    helper={{ text: 'Ayuda', onHelperClick: () => console.log('ayuda') }}
                                    errors={[ 'Error uno' ]}
                                />
                                <Input label="Telefono" />
                            </Card>
                            <Card>
                                <Steps totalSteps={this.state.totalSteps} currentStep={this.state.currentStep} />
                            </Card>
                            <Card>
                                <IconsRow>
                                    <Icon name="back" style={{ fontSize: `${rem('40px')}` }} />
                                    <Icon name="bloq" style={{ fontSize: `${rem('40px')}` }} />
                                    <Icon name="check" style={{ fontSize: `${rem('40px')}` }} />
                                    <Icon name="close" style={{ fontSize: `${rem('40px')}` }} />
                                </IconsRow>
                                <IconsRow>
                                    <Icon name="date" style={{ fontSize: `${rem('40px')}` }} />
                                    <Icon name="loader" style={{ fontSize: `${rem('40px')}` }} />
                                    <Icon name="loader" style={{ fontSize: `${rem('40px')}` }} />
                                    <Icon name="loader" style={{ fontSize: `${rem('40px')}` }} />
                                </IconsRow>
                                <IconsRow>
                                    <Icon name="date" style={{ fontSize: `${rem('40px')}` }} />
                                    <Icon name="loader" style={{ fontSize: `${rem('40px')}` }} />
                                    <Icon name="loader" style={{ fontSize: `${rem('40px')}` }} />
                                    <Icon name="loader" style={{ fontSize: `${rem('40px')}` }} />
                                </IconsRow>
                                <IconsRow>
                                    <Icon name="date" style={{ fontSize: `${rem('40px')}` }} />
                                    <Icon name="loader" style={{ fontSize: `${rem('40px')}` }} />
                                    <Icon name="loader" style={{ fontSize: `${rem('40px')}` }} />
                                    <Icon name="loader" style={{ fontSize: `${rem('40px')}` }} />
                                </IconsRow>
                            </Card>

                            <Card>
                                <Button.Filled text="Continuar" onClick={() => console.log('test')} size="full" variant="primary" />
                            </Card>
                            <Card>
                                <Button.Filled text="Borrar" onClick={() => console.log('test')} size="full" variant="secondary" />
                            </Card>

                            <Card>
                                <Button.Flat text="Informaciones" onClick={() => console.log('test')} size="full" variant="primary" />
                            </Card>
                            <Card>
                                <Button.Flat text="Advertencia" onClick={() => console.log('test')} size="full" variant="alert" />
                            </Card>

                            <Button.Flat text="Aceptar" onClick={() => console.log('test')} size="full" variant="secondary" />



                            <Card>
                                <Button.Color backgroundColor="rgb(26, 207, 103)" text="Guardar" onClick={() => console.log('test')} size="full"/>
                            </Card>
                            <Card>
                                <Button.Color backgroundColor="rgb(255, 82, 82)" text="Borrar" onClick={() => console.log('test')} size="medium" />
                            </Card>
                            <Card>
                                <Button.Color backgroundColor="rgb(254, 194, 69)" text="Importante" onClick={() => console.log('test')} size="small" />
                            </Card>

                            <Card>
                                <Button.Continue disabled={false} onClick={() => console.log('BUTTON PRESSED')} size="full" />
                                <Button.Continue arrow={true} disabled={false} onClick={() => console.log('BUTTON PRESSED')} size="full" />
                                <Button.Continue color="white" arrow={true} disabled={false} onClick={() => console.log('BUTTON PRESSED')} size="full" />
                            </Card>
                            <Card>
                                <Button.Continue disabled={true} onClick={() => console.log('BUTTON PRESSED')} size="full" />
                            </Card>
                            <Card>
                                <Button.Circle icon={'question'} text={"Ayuda"} onClick={() => console.log('test')}  variant="primary" />
                            </Card>
                        </BackgroundPhone>
                    </Tablet>
                </Background>
                
                </React.Fragment>
            </ThemeProvider>
        );
    }
}

export default All
