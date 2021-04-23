import { connect } from 'react-redux';
import {addError} from "../../actions/errorAction";
import {sendMessage} from "../../actions/messageActions";
import {MessageInput} from "../components/MessageInput";

const mapStateToProps = state => {
    return {
        username: state.authReducer.username,
        messageText: state.messageReducer.messageText
    };
};

const mapDispatchToProps = dispatch => ({
    sendMessageFunc(username, messageText) {
        return () => {
            if (messageText && messageText.length > 0) {
                dispatch(sendMessage(username, messageText));
            } else {
                dispatch(addError("Please, input your message"))
            }
        };
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageInput);