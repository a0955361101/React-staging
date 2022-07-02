import React,{Component} from "react";
import {NavLink} from 'react-router-dom'

export default class MyNavLink extends Component {
render(){
    // console.log({...this.props});
    //帶了一個children屬性 (標籤體內容特殊的屬性)
    return(
        <NavLink activeClassName="test" className='list-group-item' {...this.props} />
            
       
    )
}
}