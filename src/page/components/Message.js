import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export const Message = ({ message, isRight }) => {

    return (
        <ListGroup.Item>
            <Row className={isRight ? "float-right" : "float-left"}>
                <Col>
                    <p className={'text'}>{message.text}</p>
                <rm/>
                    <p className={'secondary-text'}>{message.time + ' ' + message.authorName}</p>
                </Col>
            </Row>
        </ListGroup.Item>
    );
};