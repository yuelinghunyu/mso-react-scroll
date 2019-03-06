// 引用 react 相关组件
import React,{Component} from 'react'
// 引用静态文件
import './header.scss'

class Header extends Component{
    constructor(){
        super()
        this.state = {
            msg: '这是头部'
        }
    }

    render() {
        return (
            <div className='header-container'>{this.state.msg}</div>
        )
    }
}
export default Header