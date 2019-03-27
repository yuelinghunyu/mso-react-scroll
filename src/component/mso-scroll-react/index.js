import "./index.scss"

import React, {Component} from 'react'
import Jroll from './jroll' //引用jroll插件，简化版的iscroll
import './pulldown'
import './infinite'

class msoScrollReact extends Component{
    constructor(props){
        super(props)
        this.jroll = null
        this.pullDownEvent = this.pullDownEvent.bind(this)
        this.pullUpEvent = this.pullUpEvent.bind(this)
    }
    componentDidMount() {
        let wrappers = this.props.ID || 'wrappers'
        this.jroll = new Jroll(`#${wrappers}`, {
            scrollBarY: true
        })
        this.pullDownEvent()
        this.pullUpEvent()
    }
    pullDownEvent() {
        this.jroll.pulldown({
            refresh: (complete) => {
                this.jroll.options.page = 1
                this.jroll.scrollTo(0, 44, 0, true)
                this.props.pullDownEvent(this.jroll, complete)
            }
        })
    }
    pullUpEvent() {
        this.jroll.infinite({
            getData: (page, callback) => {
                this.props.pullUpEvent(page, callback)
            },
            template: this.props.template
        })
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

