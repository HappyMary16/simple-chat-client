import { connect } from 'react-redux';
import {logIn} from "../../actions/authAction";
import LogInPage from "../components/LogInPage";

const mapStateToProps = state => {
    return {
        open: !state.chat.authReducer.username
    };
};

const mapDispatchToProps = dispatch => ({
    logInFunc(username) {
        return () => {
            dispatch(logIn(username));
        };
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(LogInPage);