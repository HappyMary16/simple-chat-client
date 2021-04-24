import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {Form} from "react-bootstrap";

export const LogInPage = ({isAuthorized, username, updateUsername, logIn}) => {
    return (
        <Modal show={!isAuthorized} centered>
            <Modal.Header className="justify-content-center">
                <Modal.Title>Please, input your name</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form.Control
                    placeholder={'Name'}
                    value={username}
                    onChange={updateUsername}
                />
            </Modal.Body>

            <Modal.Footer>
                <Button variant={'purple'} onClick={logIn}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
