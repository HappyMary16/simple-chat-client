import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export const ErrorMessage = ({ error, closeFunc }) => {
    return (
        <Modal show={!!error} onHide={closeFunc()} centered>
            <Modal.Header className="justify-content-center">
                <Modal.Title>{error}</Modal.Title>
            </Modal.Header>

            <Modal.Footer>
                <Button onClick={closeFunc()} variant={'purple'}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};