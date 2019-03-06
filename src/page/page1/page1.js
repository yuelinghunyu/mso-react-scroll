// 引用 react 相关组件
import React,{Component} from 'react'
// 引用静态文件
import './page1.scss'
// 引用公共组件
import Header from '@/component/header/header'
import Scroll from '@/component/mso-scroll-react/index'

class Page1 extends Component{
    constructor(){
        super()
        this.state = {
            msg: '欢迎使用mso-react-cli'
        }
    }

    render() {
        return (
            <div className='page1-container'>
                <Header></Header>
                <Scroll>
                    <div className='page1-content-container'>
                        {this.state.msg}
                    </div>
                </Scroll>
            </div>
        )
    }
}

export default Page1