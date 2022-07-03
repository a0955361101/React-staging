import React,{Component} from "react";
import { Button,Tooltip,DatePicker } from 'antd'; 
import 'antd/dist/antd.css'
import {WechatOutlined,GithubOutlined,SearchOutlined} from '@ant-design/icons';


export default class App extends Component{
  render(){
    return(
      <div>
        App..
        <button>click</button>  
        <Button type="primary">按鈕1</Button>
        <Button >按鈕2</Button>
        <Button type="link">按鈕3</Button>
        <WechatOutlined />
        <GithubOutlined />
      <Tooltip title="search">
      <Button type="primary" shape="circle" icon={<SearchOutlined />} size="large" />
    </Tooltip>
    <DatePicker />
      </div>
    )
  }
}