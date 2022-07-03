import React,{Component} from "react";

const data = [
    {id:'01',content:'你好,台灣'},
    {id:'02',content:'你好,安安'},
    {id:'03',content:'你好,皮卡'},
]
export default class Detail extends Component{
    render(){
        //接收params參數
        const {id,title} = this.props.match.params
        const findResult = data.find((datailObj)=>{
            return datailObj.id === id
        })
        return(
            <ul>
                <li>ID:{id}</li>
                <li>TITLE:{title}</li>
                <li>CONTENT:{findResult.content}</li>
            </ul>
        )
    }
} 