import React, { Component } from 'react'
import axios from 'axios';


export default class Search extends Component {
  
    search = () =>{
        // 獲取用戶的輸入
        const {keyWordElement:{value:keyWord}} = this
        // 發送請求前通知APP更新狀態
        this.props.updateAppState({isFirs:false,isLoading:true})
        
        // 發送網路請求
        axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
            response =>{
        // 請求成功後通知APP更新狀態

                this.props.updateAppState({isLoading:false,users:response.data.items})
                
            },
            error=>{this.props.updateAppState({isLoading:false,err:error.message})}
        )
    }
 

    render() {
    return (
        <section className='jumbotron'>
           <h3 className='jumbotron-heading'>搜索github用戶</h3>
           <div>
            <input ref={c => this.keyWordElement = c} type="text" placeholder='輸入關鍵字點擊搜索'/>&nbsp;
            <button onClick={this.search}>搜索</button>
           </div>
        </section>
        )
    }
}


