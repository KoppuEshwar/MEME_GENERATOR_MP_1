import React, { Component } from "react";
import Image from "./Image";
import "./ImageList.css"

export default class Gallery extends Component {
  render() {
    return (
      <div>
        <div className="h1">
          MEME-GENERATOR ;)
        </div>

        <div>
          <button className="btn-gallery" onClick={() => this.props.handleRandom()}>Random Meme..!</button>
        </div>

        <div className="image-list">
          {this.props.images.map((image) => {
            return (
              <Image
                key={image.id}
                image={image}
                handleclick={this.props.handleclick}
              />
            );
          })}
        </div>
      </div>
    );
  }
}