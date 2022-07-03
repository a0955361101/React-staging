import React,{Component} from "react";
// import qs from 'querystring'

//name=tom&age=18 key=value&key=value 
// let obj = {name:'tom',age:18} 
// console.log(qs.stringify(obj)); 
// let str = 'carName=奔馳&price=199'
// console.log(qs.parse(str));

const data = [
    {id:'01',content:'你好,台灣'},
    {id:'02',content:'你好,安安'},
    {id:'03',content:'你好,皮卡'},
]
export default class Detail extends Component{
    render(){
        // console.log(this.props);
     
        //接收params參數
        // const {id,title} = this.props.match.params 
       
        //接收 search參數
        // const {search} = this.props.location
        // const {id,title} =qs.parse(search.slice(1))

         //接收 state參數
         const {id,title} = this.props.location.state
        const findResult = data.find((datailObj)=>{
            return datailObj.id === id
        }) || {}
   
        return(
            <ul>
                <li>ID:{id}</li>
                <li>TITLE:{title}</li>
                <li>CONTENT:{findResult.content}</li>
            </ul>
        )
    }
} 