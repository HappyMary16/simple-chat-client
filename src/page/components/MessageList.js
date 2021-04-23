import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import {Message} from "./Message";
import Container from "react-bootstrap/Container";

export const MessageList = ({messages, username}) => {

    return (
        <Container className="fixed-bottom fixed-messages">
            <ListGroup variant={'flush'}>
                {messages &&
                messages.map(message => (
                    <Message key={message.time} message={message} isRight={message.authorName === username}/>
                ))}
            </ListGroup>
        </Container>
    );
};