import React from 'react'
import { Slide } from 'spectacle'

export class VtsSlide extends React.Component {
  render() {
    return (
      <Slide
        bgImage="https://lh3.googleusercontent.com/PQU3TKUIjfrybevxvzEsiYPiF0OVtgUV4bCP8mld7ixaA_Yqwg9lnZ4uosF9acy5F_tiM6yxPPIm2cAXBJEewMS1JLGNqqufo3zqYl0TGxSsxLegWdy33q4osfpybvFe0djX4nEsmvo"
        {...this.props}
      >
        {this.props.children}
      </Slide>
    )
  }
}
