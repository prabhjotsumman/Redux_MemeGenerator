import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import MemeItem from "./MemeItem";
import MyMemes from './MyMemes';
import "../styles/index.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      memeLimit: 30,
      text0: "",
      text1: ""
    };
  }
  render() {
    return (
      <div>
        <h2>Meme Generator</h2>
        <hr />
        <MyMemes />
        <hr />
        <h4>Write Top and Bottom text for the Meme</h4>
        <Form inline>
          <FormGroup>
            <FormLabel>Top</FormLabel>{" "}
            <FormControl
              type="text"
              onChange={event => {
                this.setState({ text0: event.target.value });
              }}
            ></FormControl>
          </FormGroup>{" "}
          <FormGroup>
            <FormLabel>Buttom</FormLabel>{" "}
            <FormControl
              type="text"
              onChange={event => {
                this.setState({ text1: event.target.value });
              }}
            ></FormControl>
          </FormGroup>{" "}
        </Form>
        {this.props.memes.slice(0, this.state.memeLimit).map((meme, index) => {
          return (
            <MemeItem
              key={index}
              meme={meme}
              text0={this.state.text0}
              text1={this.state.text1}
            />
          );
        })}
        <div
          className="meme-button"
          onClick={() => {
            this.setState({ memeLimit: this.state.memeLimit + 10 });
          }}
        >
          Load 10 more memes...
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    memes: state.memes
  };
}

export default connect(
  mapStateToProps,
  null
)(App);
