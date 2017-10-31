import React, { Component } from 'react';
import './App.css';
import LeftCol from '../containers/LeftCol.js';
import RightCol from '../containers/RightCol.js';
import { Row, Col } from 'react-bootstrap';

class App extends Component {
  render() {

    localStorage.removeItem('todos');

    return (
      <div className="app">
        <Row>
          <Col xs={12} sm={4}>
            <LeftCol />
          </Col>
          <Col xs={12} sm={8}>
            <RightCol />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
