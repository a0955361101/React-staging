import React, { Component } from 'react'

export default class Item extends Component {

    state = {mouse:false} // 標示鼠標移入、移出

    // 鼠標移入、移出的函式
    handleMous = (flag)=>{
        return ()=>{
            this.setState({mouse:flag})
        }
    }
    // 勾選或取消勾選的函式
    handleCheck = (id)=>{
        return (event)=>{
            this.props.changeTodo(id,event.target.checked)
        }
    }
    // 刪除一個todo的函式
    handleDelete=(id,name)=>{
        if(window.confirm(`確定刪除${name}嗎?`)){
            this.props.deleteTodo(id)
        }
     
    }
  render() {
    const {id,name,done} = this.props
    const{mouse} = this.state
    
    
    return (
        <li style={{backgroundColor:this.state.mouse?'#ddd':'#fff'}} onMouseEnter={this.handleMous(true)} onMouseLeave={this.handleMous(false)}>
        <label>
            <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
            <span>{name}</span>
        </label>
        <button onClick={()=>{this.handleDelete(id,name)}} className='btn btn-danger' style={{display:mouse? 'block':'none'}}>刪除</button>
        </li>
       
    )
  }
}
