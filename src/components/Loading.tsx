import React, { Component } from 'react'
import { BarLoader } from 'react-spinners'

class LoadingComponent extends Component<any> {
  render () {
    return (
      <BarLoader
        heightUnit='px'
        height={3}
        widthUnit='%'
        width={100}
        color='#85A5FF'
      />
    )
  }
}

export default LoadingComponent
