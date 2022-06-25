import React, { Component } from 'react'
import {nanoid} from 'nanoid'

export default class Header extends Component {

    handleKeyUp= (event)=>{
        // 解構賦值獲取keyCode,target
        const {keyCode,target} = event
        // 判斷是否是enter按鍵
        if(keyCode !== 13) return
        // 添加的todo名字不能為空
        if(target.value.trim()===''){
            alert('不能為空')
            return
        }
        // 準備好一個todo對象
        const todoObj ={id:nanoid(),name:target.value,done:false}
        this.props.addTodo(todoObj)

        // 清空輸入
        target.value = ''
    }

    render() {
    return (
        <div className='todo-header'>
            <input onKeyUp={this.handleKeyUp} type='text' placeholder='請輸入任務名稱'/>
        </div>
        )
    }
}


