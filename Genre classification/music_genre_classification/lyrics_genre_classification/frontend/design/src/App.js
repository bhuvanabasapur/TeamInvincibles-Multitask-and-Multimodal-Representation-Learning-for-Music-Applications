import './App.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

class Header extends React.Component {
  render() {
    return (
      <Navbar expand='mg' bg="primary" variant="dark" sticky="top">
        <Navbar.Brand href="#home">
          &#x266b; Music Genre Classifier
        </Navbar.Brand>
        <hr /> {/* used to place all following items on the right side */}
        <OverlayTrigger key={'bottom'} placement={'bottom'} overlay={
          <Tooltip id={'tooltip-bottom'}>
            GitHub
          </Tooltip>
        }>
          <a href="https://github.com/holgerdoerner/music_genre_classification" target="_blank" rel="noopener noreferrer">
            <Image src="GitHub-Mark-light-32px.png" roundedCircle fluid width="28rem" alt="GitHub" />
          </a>
        </OverlayTrigger>
      </Navbar>
    )
  }
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.sendRequest = this.sendRequest.bind(this);
    this.resetInput = this.resetInput.bind(this);
    this.state = {
      val_0: 0,   // Country
      val_1: 0,   // Electro
      val_2: 0,   // Folk
      val_3: 0,   // Hip-Hop
      val_4: 0,   // Jazz
      val_5: 0,   // Metal
      val_6: 0,   // Pop
      val_7: 0,    // Rock
      isLoading: false
    };
  }

  sendRequest() {
    this.setState({ isLoading: true }, () => {
      let data = {};
      data.client_id = '1234567890';
      data.data = document.getElementById('ta_lyrics').value;

      fetch('http://localhost:5000/api/v1/genre', {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(res => {
          switch (res.code) {
            case 1:
              alert('Accepted languages for lyrics: ' + res.result.toUpperCase());
              break;

            default:
              this.setState({ val_0: (res.result[0] * 100).toFixed(0) });
              this.setState({ val_1: (res.result[1] * 100).toFixed(0) });
              this.setState({ val_2: (res.result[2] * 100).toFixed(0) });
              this.setState({ val_3: (res.result[3] * 100).toFixed(0) });
              this.setState({ val_4: (res.result[4] * 100).toFixed(0) });
              this.setState({ val_5: (res.result[5] * 100).toFixed(0) });
              this.setState({ val_6: (res.result[6] * 100).toFixed(0) });
              this.setState({ val_7: (res.result[7] * 100).toFixed(0) });
              this.forceUpdate();
              break;
          }

          this.setState({ isLoading: false });
        }).catch(error => { this.setState({ isLoading: false }); alert(error); })
    });
  }

  resetInput() {
    document.getElementById('ta_lyrics').value = "";
    this.setState({ val_0: 0 });
    this.setState({ val_1: 0 });
    this.setState({ val_2: 0 });
    this.setState({ val_3: 0 });
    this.setState({ val_4: 0 });
    this.setState({ val_5: 0 });
    this.setState({ val_6: 0 });
    this.setState({ val_7: 0 });
    this.forceUpdate();
  }

  render() {
    return (
      <Container>
        <Form>
          <Col>
            <Form.Group>
              <Form.Label>Lyrics</Form.Label>
              <Form.Control id="ta_lyrics" as="textarea" rows="14" />
            </Form.Group>
            <Form.Group>
              <Row style={{ textAlign: 'center' }}>
                <Col><CircularProgressbar size='sm' value={this.state.val_0} text={`Country`} /></Col>
                <Col><CircularProgressbar value={this.state.val_1} text={`Electro`} /></Col>
                <Col><CircularProgressbar value={this.state.val_2} text={`Folk`} /></Col>
                <Col><CircularProgressbar value={this.state.val_3} text={`Hip-Hop`} /></Col>
                <Col><CircularProgressbar value={this.state.val_4} text={`Jazz`} /></Col>
                <Col><CircularProgressbar value={this.state.val_5} text={`Metal`} /></Col>
                <Col><CircularProgressbar value={this.state.val_6} text={`Pop`} /></Col>
                <Col><CircularProgressbar value={this.state.val_7} text={`Rock`} /></Col>
              </Row>
            </Form.Group>
            <Form.Group>
              <Button disabled={this.state.isLoading} size="lg" variant="primary" onClick={this.sendRequest}>{this.state.isLoading ? 'Loading...' : 'Classify'}</Button> <Button size="lg" variant="outline-secondary" onClick={this.resetInput}>Reset</Button>
            </Form.Group>
          </Col>
        </Form>
      </Container>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <br />
        <Main />
      </React.Fragment>
    );
  }
}

export default App;
