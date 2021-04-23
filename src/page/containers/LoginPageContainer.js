import { connect } from 'react-redux';
import {logIn} from "../../actions/authAction";
import LogInPage from "../components/LogInPage";
import {addError} from "../../actions/errorAction";
import {loadMessages} from "../../actions/messageActions";

const mapStateToProps = state => {
    return {
        open: !state.authReducer.username
    };
};

const mapDispatchToProps = dispatch => ({
    logInFunc(username) {
        return () => {
            if (username && username.length > 0) {
                dispatch(logIn(username));
                dispatch(loadMessages())
            } else {
                dispatch(addError("Please, input your name"))
            }
        };
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(LogInPage);