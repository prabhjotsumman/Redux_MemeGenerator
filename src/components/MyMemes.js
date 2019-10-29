import React, { Component } from 'react';
import { connect } from 'react-redux';

class MyMemes extends Component {
    render() {
        return (
            <div>
                <h4>My Memes</h4>
                {
                    this.props.myMemes.map((meme, index) => {
                        return (
                            <img key={index}
                                src={meme.data.url}
                                alt="my-meme"
                                className="my-meme-img" />
                        )
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        myMemes: state.myMemes
    }
}

export default connect(mapStateToProps, null)(MyMemes);