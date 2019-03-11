import React, { Component } from 'react'
import propTypes from 'prop-types'

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
          fontFamily: 'sans-serif'
        }}
      >
        <img
          style={{ width: '100%' }}
          src="https://instagram.fztf1-1.fna.fbcdn.net/vp/96dea7d58f82ac5b3fc1c28b780911b1/5D09E95A/t51.2885-19/s320x320/42905519_490840841413301_1220780699393458176_n.jpg?_nc_ht=instagram.fztf1-1.fna.fbcdn.net"
        />
        <div>{this.props.name}</div>
      </div>
    )
  }
}
