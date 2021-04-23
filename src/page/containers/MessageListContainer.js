import { connect } from 'react-redux';
import {MessageList} from "../components/MessageList";

const mapStateToProps = state => {
    return {
        username: state.chat.authReducer.username,
        messages: state.chat.messageReducer.messages
    };
};

export default connect(mapStateToProps)(MessageList);