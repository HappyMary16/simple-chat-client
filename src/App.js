import React, { Component } from 'react';

import ToolBarContainer from "./page/containers/ToolBarContainer";
import Container from 'react-bootstrap/Container';
import MessageListContainer from "./page/containers/MessageListContainer";
import './styles.css';
import LoginPageContainer from "./page/containers/LoginPageContainer";
import MessageInputContainer from "./page/containers/MessageInputContainer";
import {connect} from "react-redux";
import {loadMessages} from "./actions/messageActions";
import ErrorMessageContainer from "./page/containers/ErrorMessageContainer";

class App extends Component {

    componentDidMount() {
        const { dispatch, isAuthorized } = this.props;
        if (isAuthorized) {
            dispatch(loadMessages())
        }
    }

    render(){
      return(
          <Container fluid className={'main-container'}>
              <MessageListContainer/>
              <ToolBarContainer/>
              <MessageInputContainer/>
              <LoginPageContainer/>
              <ErrorMessageContainer/>
          </Container>
      );
  }
}

const mapStateToProps = state => {
    return {
        isAuthorized: !!state.authReducer.username
    };
};

export default connect(mapStateToProps)(App);
