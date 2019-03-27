// 引用 react 相关组件
import React,{Component} from 'react'
// 引用静态文件
import './page1.scss'
// 引用公共组件
import Header from '@/component/header/header'
import Scroll from '@/component/mso-scroll-react/index'
// 引用axios
import axios from 'axios'

class Page1 extends Component{
    constructor(){
        super()
        this.state = {
            list: [],
        }
        this.pullDownEvent = this.pullDownEvent.bind(this)
        this.pullUpEvent = this.pullUpEvent.bind(this)
    }
    pullDownEvent(jroll, complete) {
        complete()
        jroll.scroller.innerHTML = "";
        const url = '../../mock/data-1.json'
        axios.get(url,{}).then(res => {
            jroll.infinite_callback(res.data.data)
            this.setState({
                list: res.data.data
            })
        })
    }
    pullUpEvent(page, callback) {
        const url = '../../mock/data-' + page + '.json'
        axios.get(url,{}).then(res => {
            callback(res.data.data)
            this.setState({
                list: res.data.data
            })
        })
    }
    render() {
        let template = '<div class="template-item"><img src={{=_obj.filePath}} /><span>{{=_obj.batchId}}</span></div>'
        return (
            <div className='page1-container'>
                <Header></Header>
                <Scroll
                    pullDownEvent = {this.pullDownEvent}
                    pullUpEvent = {this.pullUpEvent}
                    template = {template}
                > 
                </Scroll>
            </div>
        )
    }
}

export default Page1