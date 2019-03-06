// 引用 react 相关组件
import React,{Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
// 引用页面组件
import Home from '@/page/home/home'
import Page1 from '@/page/page1/page1'

class RouterIndex extends Component{
    render(){
        return(
            <Switch>
                <Redirect exact strict from="/" to="/home-view" />
                <Route  path="/home-view" component={Home}/>
                <Route  path="/page1-view" component={Page1}/>
            </Switch>
        )
    }
}

export default RouterIndex;