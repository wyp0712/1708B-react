import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types';

class NavTitle extends Component {
  render() {
    // console.log(this.props, '我是父组件穿过啦的值')
    const { tab, index, item, title } = this.props
    return (
      <Fragment >
         
        <span
          className={ tab === item.state ? 'active' : '' }
          key={index}
          onClick={this.TabEvent.bind(this, item)}
        >{item.title} {title}</span>
      </Fragment>

    )
  }

  TabEvent(item) {
    const { bindEvent } = this.props
    bindEvent(item)
  }
}

NavTitle.propTypes = {
  tab: PropTypes.bool
}

// NavTitle.defaultProps = {
//   title: 'hello world'
// }

export default NavTitle;


