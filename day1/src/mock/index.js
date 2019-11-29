// mock拦截ajax,生成模拟接口

import Mock from 'mockjs'
import MovieData from './data.json'

Mock.mock('/api/movie', MovieData.movieList)