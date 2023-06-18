import React, { Component } from 'react'
import './Book.css'
export default class Book extends Component {
    render() {
        return (
            <div className='table-row'>
                <p className='title'>{this.props.title}</p>
                <p className='author'>{this.props.author}</p>
                <p className='year'>{this.props.year}</p>
            </div>
        )
    }
}
