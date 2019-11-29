import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom'

import './index.css'
import movieData from './mock/data.json'
console.log(movieData.movieList, 'movieData')
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
        },
        {
          title: '即将上映',
          ind: 1,
        }
      ],
      tab: 0,
      movieList,
    }
  }

  render() {
    return (
      <Fragment>
        <header className="app-header">
          {
            this.state.titleArr.map((item, index) => {
              return (
                <span
                  className={ this.state.tab === index ? 'active' : '' }
                  key={index}
                  onClick={this.handleTabEvent.bind(this, index)}
                >{item.title}</span>
              )
            })
          }
        </header>
        <hr />
        <ul>
          {this.state.movieList.map(item => {
            if (this.state.tab === 0 && item.globalReleased) {
              return (
                <li key={item.id}>
                  {item.nm}
                </li>
              )
            } else if (this.state.tab === 1 && !item.globalReleased) {
              return (
                <li key={item.id}>
                  {item.nm}
                </li>
              )
            } else {
              return null
            }
          })
          }
        </ul>
      </Fragment>
    )
  }

  handleTabEvent(index) {
    // 如何改变state中的值
    this.setState(() => ({
      tab: index
    }))
  }
}

ReactDOM.render(<App />, document.getElementById('root'))