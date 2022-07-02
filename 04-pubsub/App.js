// 創建'外殼'組件App
import React,{Component} from 'react';
import Search from './components/Search/Search';
import List from './components/List/List';




class App extends Component{


  
 
   

  render(){
     
  
    return(
      <div className='container'>
      <Search/>
      <List/>
      </div>
    )
  }
}

// 輸出App組件
export default App