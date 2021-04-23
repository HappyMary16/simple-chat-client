import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import {Form} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import {sendMessage} from "../../store/socketMiddlware";

class MessageInput extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {username, sendFunc} = this.props
        const {message} = this.state

        return (
            <Container>
                <Row>
                    <Col xs={7} sm={9} md={10}>
                        <Form.Control
                            placeholder={'Typo message...'}
                            onChange={e =>
                                this.setState({message: e.target.value})
                            }
                            value={message}
                        />
                    </Col>
                    <Col xs={5} sm={3} md={2}>
                        <Button variant={'purple'} block onClick={() => {
                            sendMessage(username, message)
                            this.setState({message: ""})
                        }}>Send</Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default (MessageInput);