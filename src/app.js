import "./app.scss";
import React, { Component } from 'react'
import {HashRouter as Router} from 'react-router-dom'
// 添加路由
import RouterIndex from '@/router/router'
class App extends Component{
    render(){
        return(
            <Router>
                <div className='app-container'>
                    <RouterIndex></RouterIndex>
                </div>
            </Router>
        )
    }
}
export default App