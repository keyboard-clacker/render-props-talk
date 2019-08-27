import React, { Component } from 'react'
import propTypes from 'prop-types'
import kyle from './kyle.jpeg';

export default class StandardUserAvatar extends Component {
  static propTypes = {
    name: propTypes.string
  }

  state = {
    hovering: false
  }

  onMouseEnter = () => this.setState({ hovering: true })
  onMouseLeave = () => this.setState({ hovering: false })

  render() {
    return (
      <div
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        style={{
          backgroundColor: this.state.hovering ? '#aaa' : 'white',
          borderRadius: '3px',
          padding: '5px',
          width: '200px',
          display: 'inline-block',
          border: '3px solid black',
          borderColor: this.state.hovering ? 'red' : 'yellow',
          fontFamily: 'sans-serif',
          cursor: 'pointer'
        }}
      >
        <img
          style={{ width: '100%' }}
          src={kyle}
        />
        <div>{this.props.name}</div>
      </div>
    )
  }
}
