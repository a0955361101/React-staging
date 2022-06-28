// 創建'外殼'組件App
import React,{Component} from 'react';

import './App.css'


class App extends Component{
  

  render(){
   
    return(
            <div className="container">
                <h2 className='page-header'>基本使用</h2>
                <button className='btn btn-primary'>發送GET請求</button>
                <button className='btn btn-warning'>發送POST請求</button>
                <button className='btn btn-success'>發送PUT請求</button>
                <button className='btn btn-danger'>發送DELETE請求</button>
              </div> 
        
    )
  }
}

// 輸出App組件
export default App