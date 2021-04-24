import {connect} from 'react-redux';
import {addError} from "../../actions/errorAction";
import {saveMessage, sendMessage} from "../../actions/messageActions";
import {MessageInput} from "../components/MessageInput";
import React, {Component} from "react";

class MessageInputContainer extends Component {

    constructor(props) {
        super(props);

        this.saveMessage = this.saveMessage.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
    }

    saveMessage(e) {
        const { dispatch } = this.props
        dispatch(saveMessage(e.target.value));
    }

    sendMessage() {
        const { dispatch, username, messageText } = this.props

        if (messageText && messageText.length > 0) {
            dispatch(sendMessage(username, messageText));
        } else {
            dispatch(addError("Please, input your message"))
        }
    }

    render() {
        const { messageText } = this.props

        return (
            <MessageInput messageText={messageText}
                          saveMessage={this.saveMessage}
                          sendMessage={this.sendMessage}/>
        );
    }
}

const mapStateToProps = state => {
    return {
        username: state.authReducer.username,
        messageText: state.messageReducer.messageText
    };
};

export default connect(mapStateToProps)(MessageInputContainer);