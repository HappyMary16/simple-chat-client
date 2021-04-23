import React, { Component } from 'react';

import ToolBarContainer from "./page/containers/ToolBarContainer";
import Container from 'react-bootstrap/Container';
import MessageListContainer from "./page/containers/MessageListContainer";
import './styles.css';
import LoginPageContainer from "./page/containers/LoginPageContainer";
import MessageInputContainer from "./page/containers/MessageInputContainer";

class App extends Component {
  render(){
      return(
          <Container fluid className={'main-container'}>
              <ToolBarContainer/>
              <LoginPageContainer/>
              <MessageListContainer/>
              <MessageInputContainer/>
          </Container>
      );
  }
}

export default App;
