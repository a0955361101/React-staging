// 創建'外殼'組件App
import React,{Component} from 'react';
import About from './routes/About/About';
import Home from './routes/Home/Home';
import Demo from '../src/routes/Demo/Demo';
import Header from './components/Header/Header';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import MyNavLink from './components/MyNavLink/MyNavLink'
import './App.css'
class App extends Component{

  render(){   
  
    return(
      <BrowserRouter>
        <div className='row '>
          <div className='col-xs-offset-2 col-xs-8'>
            <Header/>
          </div>
          </div>
          <div className='row'>
          <div className='col-xs-offset-2 col-xs-2'>
            <div className='list-group'>
              {/* 原生html中靠a跳轉不同的頁面 */}
           {/* <a className='list-group-item' href='./about.html'>About</a>
           <a className='list-group-item active' href='./home.html'>Home</a> */}

           {/* 在react中靠路由鏈接實現切換組件 */}
    
          <MyNavLink to="/about">About</MyNavLink>
          <MyNavLink to="/home">Home</MyNavLink>
            </div>
          </div>
          </div>
        <div className='col-xs-6'>
          <div className='panel'>
            <div className='panel-body'>
           {/* 註冊路由 */}
           <Switch>
           <Route path='/about' component={About}/>
           <Route path='/home' component={Home}/>
           <Route path='/home' component={Demo}/>
           </Switch>
            
            </div>
          </div>
        </div>
        </BrowserRouter>
    )
  }
}

// 輸出App組件
export default App