import { connect } from 'react-redux';
import MessageInput from "../components/MessageInput";

const mapStateToProps = state => {
    return {
        username: state.chat.authReducer.username
    };
};

export default connect(mapStateToProps)(MessageInput);