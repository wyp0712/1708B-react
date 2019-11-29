import React, { Component, Fragment } from 'react'

class NavList extends Component {
  render() {
    const { tab, movieList } = this.props
    return (
      <Fragment>
        {
          movieList.map(item => {
            return  tab === item.globalReleased ? <li key={item.id}> {item.nm} </li> : null 
          })
        }
      </Fragment>
    )
  }
}

export default NavList;

