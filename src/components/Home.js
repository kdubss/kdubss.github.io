import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import { Jumbotron, Container } from 'reactstrap';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  render() {
    return (
      <div>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">Kang Wang</h1>
            <p className="lead">Software Developer / M.Sc. / Distance Runner / Artist / Tinkerer </p>
            <hr />
          </Container>
        </Jumbotron>
      </div>
    )
  }
};

export default Home;