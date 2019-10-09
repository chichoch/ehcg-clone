import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  width: {(props) => props.width + 'px' || 100%}
  initial-scale: 1;
`

export default class SizeWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    return (
      <Wrapper width={this.state.width}>
        {this.props.children}
      </Wrapper>
    );
  }
}
