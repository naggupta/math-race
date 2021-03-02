import React, { Component } from 'react';
import Map, { List } from 'immutable';
import Drawing from './Drawing';
import * as Classes from './DrawArea.module.css';

class DrawArea extends Component {
  constructor() {
    super();

    this.state = {
      lines: new List(),
      isDrawing: false,
    };

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mouseup', this.handleMouseUp);
  }

  componentWillUnmount() {
    document.removeEventListener('mouseup', this.handleMouseUp);
  }

  handleMouseDown(mouseEvent) {
    if (mouseEvent.button !== 0) {
      return;
    }

    const point = this.relativeCoordinatesForEvent(mouseEvent);

    this.setState((prevState) => ({
      lines: prevState.lines.push(new List([point])),
      isDrawing: true,
    }));
  }

  handleMouseMove(mouseEvent) {
    if (!this.state.isDrawing) {
      return;
    }

    const point = this.relativeCoordinatesForEvent(mouseEvent);

    this.setState((prevState) => ({
      lines: prevState.lines.updateIn([prevState.lines.size - 1], (line) => line.push(point)),
    }));
  }

  handleMouseUp() {
    this.setState({ isDrawing: false });
  }

  relativeCoordinatesForEvent(mouseEvent) {
    const boundingRect = this.drawArea.getBoundingClientRect();
    return new Map({
      x: mouseEvent.clientX - boundingRect.left,
      y: mouseEvent.clientY - boundingRect.top,
    });
  }

  render() {
    return (
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      <div
        className={Classes.drawArea}
        ref={(c) => {
          this.drawArea = c;
        }}
        onMouseDown={this.handleMouseDown}
        onMouseMove={this.handleMouseMove}
      >
        <Drawing lines={this.state.lines} />
      </div>
    );
  }
}

export default DrawArea;
