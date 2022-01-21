import React, { Component } from "react";
import Gallery from "./Gallery";
import TempGen from "./TempGen";

export default class App extends Component {
  state = {
    images: [],
    selected: null,
    selectedImg: [],
  };

  handleImgClick = (e) => {
    this.setState({
      selectedImg: this.state.images.find(i => i.id === e.target.id),
    });
    this.toggleSelected()
  };

  chooseRandom = () => {
    this.setState({ selected: true, selectedImg: this.state.images[Math.floor(Math.random() * this.state.images.length)] })
  }

  toggleComponent = () => {
    if (this.state.selected) {
      return <TempGen meme={this.state.selectedImg} toggleSelected={this.toggleSelected} />;
    } else {
      return (
        <Gallery
          handleRandom={this.chooseRandom}
          images={this.state.images}
          handleclick={this.handleImgClick}
        />
      );
    }
  };

  render() {
    return <div>
      {this.toggleComponent()}
    </div>;
  }

  toggleSelected = () => {
    this.setState({ selected: !this.state.selected })
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((r) => r.json())
      .then((images) => {
        this.setState({ images: images.data.memes.filter((i) => i.box_count === 2) });
      });
  }
}
