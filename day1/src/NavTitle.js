import React, { Component } from 'react'

class NavTitle extends Component {
  render() {
    // console.log(this.props, '我是父组件穿过啦的值')
    const { tab, index, item } = this.props
    return (
      <span
        className={ tab === item.state ? 'active' : '' }
        key={index}
        onClick={this.TabEvent.bind(this, item)}
      >{item.title}</span>
    )
  }


  TabEvent(item) {
    const { bindEvent } = this.props
    bindEvent(item)
  }
}

export default NavTitle;


