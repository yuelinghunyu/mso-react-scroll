import "./home.scss";
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Home extends Component{
    static contextTypes = {
        router: PropTypes.object.isRequired
    }
    constructor() {
        super()
        this.state = {
            logo: require('#/img/logo.jpg')
        }
        this.pageEvent = this.pageEvent.bind(this)
    }
    render(){
        return(
            <div className='home-container'>
                <img src={this.state.logo} />
                <p className="logo-text">jdj react</p>
                <p className="slogon-text">不念过去、不畏将来</p>
                <p onClick={this.pageEvent}>页面跳转</p>
            </div>
        )
    }
    pageEvent() {
        const path = '/page1-view'
        this.context.router.history.replace(path)
    }
}
export default Home