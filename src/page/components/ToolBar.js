import React from 'react';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";
import {ChatIcon} from "./ChatIcon";

export const TopToolBar = ({isAuthorized, logOut}) => {
    return (
        <Container className={'fixed-top'}>
            <Nav className={'app-bar'}>
                <Col xs={2}>
                    <ChatIcon/>
                </Col>
                <Col
                    xs={{offset: 4, span: 6}}
                    sm={{offset: 7, span: 3}}
                    md={{offset: 8, span: 2}}
                    xl={{offset: 8, span: 2}}
                >
                    {isAuthorized && (
                        <Button
                            variant={'purple'}
                            className={'menu-btn'}
                            onClick={logOut()}
                            block>
                            Log out
                        </Button>
                    )}
                </Col>
            </Nav>
        </Container>
    );
};