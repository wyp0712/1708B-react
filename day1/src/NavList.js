import React, { Component,Fragment } from 'react'

class NavList extends Component {
  render() {
    const { tab, movieList } = this.props
    return (
      <Fragment>
        {/* { true === item.globalReleased ? <li>{item.nm} </li> : <li>{item.nm} ------- {item.globalReleased}</li> } */}
        {
          movieList.map(item => {
            if (item.globalReleased === tab) {
              return (
                <li key={item.id}> {item.nm} </li>
              )
            } else {
              return null
            }
          })  
        }
      </Fragment>
    )
  }
}

export default NavList;

