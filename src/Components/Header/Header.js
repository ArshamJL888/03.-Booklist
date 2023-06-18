import React, { Component } from 'react'
import {FaBookOpen} from 'react-icons/fa'
import './Header.css'
export default class Header extends Component {
  render() {
    return (
      <div>
        <div className='top'>
        <FaBookOpen style={{color: '#F69B14', width: '70px', height: '70px'}} />
        <p className='header-text'>React <span className='color'>Booklist</span> Project</p>
        </div>

      </div>
    )
  }
}
