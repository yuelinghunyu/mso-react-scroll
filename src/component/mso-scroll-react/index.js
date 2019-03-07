import "./index.scss"

import React, {Component} from 'react'
import Jroll from './jroll' //引用jroll插件，简化版的iscroll
import './pulldown'
import './infinite'

class msoScrollReact extends Component{
    constructor(props){
        super(props)
        this.jroll = null
    }
    componentDidMount() {
        let wrappers = this.props.ID || 'wrappers'
        this.jroll = new Jroll(`#${wrappers}`)
        this.jroll.refresh()
        this.jroll.on('scrollEnd', () => {
            this.jroll.refresh()
        })
    }
    componentDidUpdate() {
        setTimeout(() => {
            if(this.jroll) {
                this.jroll.refresh()
            }
        }, 400)
    }
    componentWillUnmount() {
        this.jroll.destroy()
    }
    render() {
        const {customClass} = this.props
        return(
            <div
                id={this.props.ID ? this.props.ID : 'wrappers'}
                className = {customClass ? customClass : 'originClass'}
            >
                <ul
                    className="clearfix"
                    id="scroller"
                >
                    {this.props.children}
                </ul>
            </div>
        )
    }
}
export default msoScrollReact

