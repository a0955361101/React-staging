import React, { Component } from 'react'
// import axios from 'axios';
import PubSub from 'pubsub-js';


export default class Search extends Component {
  
    search =  async () =>{

        PubSub.publish('states',{isFirs:false,isLoading:true})
        // 獲取用戶的輸入
        const {keyWordElement:{value:keyWord}} = this
        // 發送請求前通知APP更新狀態
        // 發送網路請求 fetch
        // fetch(`https://api.github.com/search/users?q=${keyWord}`).then(
        //     response=>{
        //     console.log('聯繫伺服器成功')
        //     return response.json()
        // },
           
        // ).then(
        //     data => {console.log('獲取數據成功了',data);},
           
        // ).catch(
        //     (error)=>{console.log(error);}
        // )
        try {
            const response = await fetch(`https://api.github.com/search/users?q=${keyWord}`)
            const data = await response.json()
            console.log(data);
            PubSub.publish('states',{isLoading:false,users:data.items})
            
        } catch (error){
            console.log('請求失敗',error);
            PubSub.publish('states',{isLoading:false,err:error.message})
        }
        
       
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


