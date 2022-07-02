import React, { Component } from 'react'
import PubSub from 'pubsub-js'




export default class List extends Component {

    state = { //初始化狀態
        users:[], //users初始值為數組
        isFirst:true, //是否為第一次打開頁面
        isLoading:false, //標示是否屬於加載中
        err:'', //儲存錯誤訊息
      } 

      componentDidMount(){
       this.token =  PubSub.subscribe('states',(msg,stateObj)=>{
            this.setState(stateObj)
        })
      }
    
    componentWillUnmount(){
        PubSub.unsubscribe(this.token)
    }
     
    render() {
       const {users,isFirst,isLoading,err } = this.state
       
    return (
        <div className='row'>

            {
                // isFirst ? <h2>歡迎使用</h2> : 
                // isLoading ? <h2>Loading</h2> :
                // err ? <h2 style={{color:'red'}}>404</h2> :
                users.map((userObj)=>{
                    return (
                        <div className="card" key={userObj.id}>
                        <a href={userObj.html_url} target="_blank" rel="noreferrer">
                            <img src={userObj.avatar_url} style={{width:100}} alt="" />
                        </a>
                        <p className='card-text'>{userObj.login}</p>
                    </div>
                
                    )
                })
            }
          
          
        </div>
    )
    }
}
