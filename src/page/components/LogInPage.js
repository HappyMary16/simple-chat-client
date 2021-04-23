import React, {Component} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {Form} from "react-bootstrap";

class LogInPage extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {open, logInFunc} = this.props
        const {name} = this.state

        return (
            <Modal show={open} centered>
                <Modal.Header className="justify-content-center">
                    <Modal.Title>Please input your name</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form.Control
                        placeholder={'Name'}
                        onChange={e =>
                            this.setState({name: e.target.value})
                        }
                        required
                    />
                </Modal.Body>

                <Modal.Footer>
                    <Button variant={'purple'} onClick={logInFunc(name)}>Save</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default (LogInPage);