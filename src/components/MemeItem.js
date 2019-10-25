import React, { Component } from "react";
import { createMeme } from "../actions";
import { connect } from "react-redux";

class MemeItem extends Component {
  constructor() {
    super();
    this.state = {
      hovered: false
    };
  }

  postMeme() {
    const { text0, text1 } = this.props;
    const memObj = {
      template_id: this.props.meme.id,
      text0,
      text1
    };
    this.props.createMeme(memObj);
  }
  render() {
    const { meme } = this.props;
    return (
      <div
        className="meme-item"
        onMouseEnter={() => this.setState({ hovered: true })}
        onMouseLeave={() => this.setState({ hovered: false })}
        onClick={() => this.postMeme()}
      >
        <img
          className={this.state.hovered ? "meme-img darken-img" : "meme-img"}
          src={meme.url}
          alt={meme.name}
        />
        <p className={this.state.hovered ? "meme-txt" : "no-txt"}>
          {meme.name}
        </p>
      </div>
    );
  }
}
export default connect(
  null,
  { createMeme }
)(MemeItem);
