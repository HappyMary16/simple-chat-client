import { connect } from 'react-redux';
import {MessageList} from "../components/MessageList";

const mapStateToProps = state => {
    return {
        username: state.authReducer.username,
        messages: state.messageReducer.messages
    };
};

export default connect(mapStateToProps)(MessageList);