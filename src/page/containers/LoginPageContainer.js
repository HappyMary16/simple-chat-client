import {connect} from 'react-redux';
import {logIn, saveUsername} from "../../actions/authActions";
import {LogInPage} from "../components/LogInPage";
import {addError} from "../../actions/errorActions";
import {loadMessages} from "../../actions/messageActions";
import React, {Component} from "react";

class LoginPageContainer extends Component {

    constructor(props) {
        super(props);

        this.updateUsername = this.updateUsername.bind(this);
        this.logIn = this.logIn.bind(this);
    }

    updateUsername(e) {
        const {dispatch} = this.props
        dispatch(saveUsername(e.target.value));
    }

    logIn() {
        const {dispatch, username} = this.props
        if (username && username.length > 0) {
            dispatch(logIn());
            dispatch(loadMessages())
        } else {
            dispatch(addError("Please, input your name"))
        }
    }

    render() {
        const {isAuthorized, username} = this.props

        return (
            <LogInPage isAuthorized={isAuthorized}
                       username={username}
                       updateUsername={this.updateUsername}
                       logIn={this.logIn}/>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthorized: state.authReducer.isAuthorized,
        username: state.authReducer.username
    };
};

export default connect(mapStateToProps)(LoginPageContainer);