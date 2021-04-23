import React from 'react';
import Button from 'react-bootstrap/Button';
import {Form} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

export const MessageInput = ({username, messageText, sendMessageFunc}) => {

    const [message, setMessage] = React.useState(messageText);

    return (
        <Container className="fixed-bottom">
            <Row>
                <Col xs={7} sm={9} md={10}>
                    <Form.Control
                        placeholder={'Typo message...'}
                        onChange={e => setMessage(e.target.value)}
                        value={message}
                        defaultValue={messageText}
                    />
                </Col>
                <Col xs={5} sm={3} md={2}>
                    <Button variant={'purple'} block onClick={sendMessageFunc(username, message)}>
                        Send</Button>
                </Col>
            </Row>
        </Container>
    );
}