import React from 'react';
import Button from 'react-bootstrap/Button';
import {Form} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

export const MessageInput = ({messageText, saveMessage, sendMessage}) => {

    return (
        <Container className="fixed-bottom">
            <Row>
                <Col xs={7} sm={9} md={10}>
                    <Form.Control
                        placeholder={'Typo message...'}
                        onChange={saveMessage}
                        value={messageText}
                    />

                </Col>
                <Col xs={5} sm={3} md={2}>
                    <Button variant={'purple'} block onClick={sendMessage}>
                        Send
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}