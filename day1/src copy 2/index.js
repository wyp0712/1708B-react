import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom'
import NavTitle from './NavTitle'
import NavList from './NavList'
import movieData from './mock/data.json'
import './index.css'
const movieList = movieData.movieList

// html
// JSX 语法：  html js {}
// es6组件  jsx语法中，所有标签必须闭合
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      titleArr: [
        {
          title: '正在上映',
          ind: 0,
          state: true
        },
        {
          title: '即将上映',
          ind: 1,
          state: false
        }
      ],
      tab: true, // 控制tab切换的值
      movieList,
    }
  }

  render() {
    return (
      <Fragment>
        <header className="app-header">
          {this.getNavTitle()}
        </header>
        <ul>
          {this.getNavList()}
        </ul>
      </Fragment>
    )
  }
  
  // 循环函数
  getNavList() {
    const { tab, movieList } = this.state
    return (
        <NavList
          movieList={movieList}
          tab={tab}
        />
      )
  }
  
  // 头部函数
  getNavTitle() {
    const { tab, title } = this.state
    return this.state.titleArr.map((item, index) => {
      return (
        <NavTitle 
          title={title}
          key={index} 
          tab={tab}
          index={index}
          item={item}
          bindEvent={this.handleTabEvent.bind(this, item)} 
        />
      )
    })
  }

  handleTabEvent(item) {
    // 如何改变state中的值
    this.setState(() => ({
      tab: item.state
    }))
  }
}

ReactDOM.render(<App />, document.getElementById('root'))