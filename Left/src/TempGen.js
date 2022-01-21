import React, { Component } from "react";
import "./Generator.css";
import * as svg from "save-svg-as-png";

const initialState = {
    toptext: "",
    bottomtext: "",
    isTopDragging: false,
    isBottomDragging: false,
    topX: "50%",
    topY: "10%",
    bottomX: "50%",
    bottomY: "90%",
};

class TempGen extends Component {
    constructor() {
        super();
        this.state = {
            ...initialState
        };
    }

    getStateObj = (e, type) => {
        let rect = this.imageRef.getBoundingClientRect();
        const xOffset = e.clientX - rect.left;
        const yOffset = e.clientY - rect.top;
        let stateObj = {};
        if (type === "bottom") {
            stateObj = {
                isBottomDragging: true,
                isTopDragging: false,
                bottomX: `${xOffset}px`,
                bottomY: `${yOffset}px`,
            };
        } else if (type === "top") {
            stateObj = {
                isTopDragging: true,
                isBottomDragging: false,
                topX: `${xOffset}px`,
                topY: `${yOffset}px`,
            };
        }
        return stateObj;
    };

    changeText = (event) => {
        this.setState({
            [event.currentTarget.id]: event.currentTarget.value,
        });
        let type = event.currentTarget.name
        this.resizeText(type)
    };

    handleMouseDown = (e, type) => {
        const stateObj = this.getStateObj(e, type);
        document.addEventListener("mousemove", (event) =>
            this.handleMouseMove(event, type)
        );
        this.setState({
            ...stateObj,
        });
    };

    handleMouseMove = (e, type) => {
        if (this.state.isTopDragging || this.state.isBottomDragging) {
            let stateObj = {};
            if (type === "bottom" && this.state.isBottomDragging) {
                stateObj = this.getStateObj(e, type);
            } else if (type === "top" && this.state.isTopDragging) {
                stateObj = this.getStateObj(e, type);
            }
            this.setState({
                ...stateObj,
            });
        }
    };

    handleMouseUp = (event) => {
        document.removeEventListener("mousemove", this.handleMouseMove);
        this.setState({
            isTopDragging: false,
            isBottomDragging: false,
        });
    };

    saveMeme = () => {
        let name = document.getElementById("memename").value
        name.length > 0 ?
            svg.saveSvgAsPng(document.getElementById("svg_ref"), `${name}.png`) :
            svg.saveSvgAsPng(document.getElementById("svg_ref"), "meme.png")
    };

    resetBoxes = () => {
        this.setState({
            toptext: "",
            bottomtext: "",
            topX: "50%",
            topY: "10%",
            bottomX: "50%",
            bottomY: "90%"
        });
        document.getElementById("toptext").value = "";
        document.getElementById("bottomtext").value = "";
        document.getElementById("memename").value = "";
        document.getElementById("tiptoptext").style.fontSize = "50px"
        document.getElementById("bittybottomtext").style.fontSize = "50px"
    }

    resizeText = (type) => {
        let currentWidth = document.getElementById(type).textLength.baseVal.value
        let imageWidth = this.props.meme.width
        if (currentWidth > imageWidth) {
            document.getElementById(type).style.fontSize = `${(imageWidth / currentWidth) * 40}px`;
        }
    }

    render() {
        const image = this.props.meme;
        var wrh = image.width / image.height;
        var newWidth = 500;
        var newHeight = newWidth / wrh;

        const textStyle = {
            fontFamily: "Impact",
            fontSize: "50px",
            textTransform: "uppercase",
            fill: "#FFF",
            stroke: "#000",
            userSelect: "none"
        };

        return (
            <div>
                <div className="h1" onClick={() => this.props.toggleSelected()}>
                    MEME GENERATOR
                </div>
                <div className="main-content">
                    <div className="meme-gen-modal">
                        <svg
                            id="svg_ref"
                            ref={(el) => { this.svgRef = el; }}
                            height={newHeight}
                            width={newWidth}
                        >
                            <image
                                ref={(el) => {
                                    this.imageRef = el;
                                }}
                                xlinkHref={this.props.meme.url}
                                height={newHeight}
                                width={newWidth}
                            />

                            <text
                                id="tiptoptext"
                                style={{ ...textStyle, zIndex: this.state.isTopDragging ? 4 : 1 }}
                                x={this.state.topX}
                                y={this.state.topY}
                                dominantBaseline="middle"
                                textAnchor="middle"
                                onMouseDown={(event) => this.handleMouseDown(event, "top")}
                                onMouseUp={(event) => this.handleMouseUp(event, "top")}
                            >
                                {this.state.toptext}
                            </text>

                            <text
                                id="bittybottomtext"
                                style={textStyle}
                                dominantBaseline="middle"
                                textAnchor="middle"
                                x={this.state.bottomX}
                                y={this.state.bottomY}
                                onMouseDown={(event) => this.handleMouseDown(event, "bottom")}
                                onMouseUp={(event) => this.handleMouseUp(event, "bottom")}
                            >
                                {this.state.bottomtext}
                            </text>
                        </svg>
                        <div className="meme-form">
                            <input
                                className="form-control"
                                type="text"
                                name="tiptoptext"
                                id="toptext"
                                placeholder="Add text to the top"
                                onChange={this.changeText}
                            />

                            <input
                                className="form-control"
                                type="text"
                                name="bittybottomtext"
                                id="bottomtext"
                                placeholder="Add text to the bottom"
                                onChange={this.changeText}
                            />
                            <input
                                className="form-control"
                                type="text"
                                id="memename"
                                placeholder="Save meme as..."
                            />
                        </div>
                        <div className="buttons">
                            <button onClick={this.saveMeme} className="btn btn-primary">Download Meme :D</button>
                            <button onClick={this.resetBoxes} className="btn btn-primary">Reset</button>
                            <button onClick={() => this.props.toggleSelected()} className="btn btn-primary">Back to Gallery</button>
                        </div>
                    </div>
                </div >
            </div>
        );
    }
}

export default TempGen;
