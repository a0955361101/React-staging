import React, { Component } from 'react'




export default class List extends Component {

     
    render() {
       const {users,isFirst,isLoading,err } = this.props
       console.log(err);
    return (
        <div className='row'>

            {
                // isFirst ? <h2>歡迎使用</h2> : 
                // isLoading ? <h2>Loading</h2> :
                // err ? <h2 style={{color:'red'}}>404</h2> :
                users.map((userObj)=>{
                    return (
                        <div className="card" key={userObj.id}>
                        <a href={userObj.html_url} target="_blank" rel="noreferrer">
                            <img src={userObj.avatar_url} style={{width:100}} alt="" />
                        </a>
                        <p className='card-text'>{userObj.login}</p>
                    </div>
                
                    )
                })
            }
          
          
        </div>
    )
    }
}
