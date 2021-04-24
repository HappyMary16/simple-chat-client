import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export const ErrorMessage = ({ error, closeErrorMessage }) => {
    return (
        <Modal show={!!error} onHide={closeErrorMessage()} centered>
            <Modal.Header className="justify-content-center">
                <Modal.Title>{error}</Modal.Title>
            </Modal.Header>

            <Modal.Footer>
                <Button onClick={closeErrorMessage()} variant={'purple'}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};