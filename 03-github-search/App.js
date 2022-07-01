// 創建'外殼'組件App
import React,{Component} from 'react';
import Search from './components/Search/Search';
import List from './components/List/List';




class App extends Component{

  state = { //初始化狀態
    users:[], //users初始值為數組
    isFirst:true, //是否為第一次打開頁面
    isLoading:false, //標示是否屬於加載中
    err:'', //儲存錯誤訊息
  } 

  updateAppState = (stateObj) =>{
    this.setState(stateObj)
  }
  
 
   

  render(){
     
  
    return(
      <div className='container'>
      <Search updateAppState={this.updateAppState}/>
      <List {...this.state}/>
      </div>
    )
  }
}

// 輸出App組件
export default App