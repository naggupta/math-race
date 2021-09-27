import React, { Component } from 'react';
import Immutable from 'immutable';
import Drawing from './Drawing';
import Classes from './CanvasDraw.module.css';

class DrawArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDrawing: false,
      lines: Immutable.List(),
    };

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mouseup', this.handleMouseUp);
    document.addEventListener('touchend', this.handleMouseUp);
  }
  componentWillUnmount() {
    document.removeEventListener('mouseup', this.handleMouseUp);
    document.removeEventListener('touchend', this.handleMouseUp);
  }

  handleMouseUp = () => {
    this.setState({ isDrawing: false });
  };

  relativeCoordinatesForEvent = (mouseEvent) => {
    const boundingRect = this.drawArearef.getBoundingClientRect();
    return new Immutable.Map({
      x: mouseEvent.clientX - boundingRect.left,
      y: mouseEvent.clientY - boundingRect.top,
    });
  };

  handleMouseDown = (mouseEvent) => {
    if (mouseEvent.button !== 0) {
      return;
    }

    const point = this.relativeCoordinatesForEvent(mouseEvent);
    this.setState((prevState) => {
      return {
        lines: prevState.lines.push(Immutable.List([point])),
        isDrawing: true,
      };
    });
  };

  handleMouseMove = (mouseEvent) => {
    if (!this.state.isDrawing) {
      return;
    }
    console.log('[DrawArea] handlemouseMove');
    const point = this.relativeCoordinatesForEvent(mouseEvent);

    this.setState((prevState) => {
      return {
        lines: prevState.lines.updateIn([prevState.lines.size - 1], (line) => line.push(point)),
      };
    });
  };
  render() {
    return (
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      <div
        className={Classes.svgComponent}
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        tabIndex={0}
        ref={(c) => {
          this.drawArearef = c;
        }}
        onMouseDown={this.handleMouseDown}
        onMouseMove={this.handleMouseMove}
        onTouchStart={this.handleMouseDown}
        onTouchMove={this.handleMouseMove}
      >
        <Drawing lines={this.state.lines} />
      </div>
    );
  }
}

// const styles = StyleSheet.create({
//     container: {
//       backgroundColor: '#F5FCFF',
//       flex: 1,
//       paddingTop: 20,
//     },
//     actionsBar: {
//       alignItems: 'stretch',
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//       padding: 20,
//     },
//   });
export default DrawArea;
