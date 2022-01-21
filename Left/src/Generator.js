import React, { Component } from "react";
import "./Generator.css"

class Canvas extends React.Component {
  componentDidMount() {
    const canvas = this.refs.canvas
    const ctx = canvas.getContext("2d")
    const img = this.refs.image
    img.onload = () => {
      ctx.drawImage(img, 0, 0)
      ctx.font = "40px Courier"
      ctx.fillText(this.props.text, 210, 75)
    }
  }
  render() {
    return (
      <div>
        <canvas ref="canvas" width={1000} height={1000} />
        <img ref="image" src={this.props.meme.url} className="hidden" />
      </div>
    )
  }
}
export default Canvas
