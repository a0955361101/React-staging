// 創建'外殼'組件App
import React,{Component} from 'react';
import Hello from './components/Hello/Hello';
import Welcome from './components/Welcome/Welcome';

class App extends Component{
  render(){
    return(
      <div>
       <Hello/>
       <Welcome/>
      </div>
    )
  }
}

// 輸出App組件
export default App