import React from "react";
export default class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spans: 0,
    }
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans)
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10 + 2)
    this.setState({ spans })
  }

  render() {
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img
          ref={this.imageRef}
          src={this.props.image.url}
          alt={this.props.image.name}
          id={this.props.image.id}
          onClick={(e) => this.props.handleclick(e)}
        />
      </div>
    );
  }
}
