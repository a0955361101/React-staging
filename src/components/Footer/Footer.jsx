import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
        <div className='todo-footer'>
        <label>
          <input type="checkbox"/>
        </label>
        <span>
          <span>已完成0</span>
        </span>
        <button className='btn btn-danger'>清除已完成任務</button>
      </div>
    )
  }
}
