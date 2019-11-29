import React, { Component, Fragment } from 'react'

// 无状态组件 函数组件 UI组件 展示性组件
const NavList = (props) => {
  const { tab, movieList } = props
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

// class组件 
// class NavList extends Component {
//   render() {
//     const { tab, movieList } = this.props
//     return (
//       <Fragment>
//         {
//           movieList.map(item => {
//             return  tab === item.globalReleased ? <li key={item.id}> {item.nm} </li> : null 
//           })
//         }
//       </Fragment>
//     )
//   }
// }

export default NavList;

