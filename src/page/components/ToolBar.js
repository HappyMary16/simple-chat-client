import React from 'react';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";

export const TopToolBar = ({username, logOutFunc}) => {
    return (
        <Container className={'fixed-top'}>
            <Nav className={'app-bar'}>
                <Col
                    xs={{offset: 7, span: 5}}
                    sm={{offset: 9, span: 3}}
                    md={{offset: 10, span: 2}}
                >
                    {!!username && (
                        <Button
                            variant={'purple'}
                            className={'menu-btn'}
                            onClick={logOutFunc()}
                            block>
                            Log out
                        </Button>
                    )}
                </Col>
            </Nav>
        </Container>
    );
};