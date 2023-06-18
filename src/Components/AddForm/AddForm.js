import React, { Component } from 'react'
import './AddForm.css'
import Book from '../Book/Book'
export default class AddForm extends Component {

    constructor(prop) {
        super(prop);

        this.state = {
            Books: [],
            title: '',
            author: '',
            year: ''
        }
        this.changeAuthorHandler = this.changeAuthorHandler.bind(this)
        this.changeAuthorHandler = this.changeAuthorHandler.bind(this)
        this.changeYearHandler = this.changeYearHandler.bind(this)
        this.submitFormHandler = this.submitFormHandler.bind(this)
        window.addEventListener('keyup', (event) => {
            event.keyCode === 13 && this.submitFormHandler(event);
        })

    }

    changeTitleHandler(event) {
        this.setState({
            title: event.nativeEvent.target.value
        })
    }

    changeAuthorHandler(event) {
        this.setState({
            author: event.nativeEvent.target.value
        })
    }

    changeYearHandler(event) {
        this.setState({
            year: event.nativeEvent.target.value
        })
    }

    submitFormHandler(event) {
        event.preventDefault();
        let { title, author, year } = this.state;

        if (title && author && year) {
            let newBook = {
                id: this.state.Books.length + 1,
                title: title,
                author: author,
                year: year
            };
            let newBooksArray = [...this.state.Books];
            newBooksArray.push(newBook);
            this.setState({
                Books: newBooksArray,
                title: '',
                author: '',
                year: ''
            })
        }
    }

    render() {
        return (
            <div>
                <div className='input-class'>
                    <div className='input-section'>
                        <label className='label-input'>Title: </label>
                        <input value={this.state.title} placeholder='Title...' type="text" className="input-info" onChange={(event) => { this.changeTitleHandler(event) }} />
                    </div>
                    <div className='input-section'>
                        <label className='label-input'>Author: </label>
                        <input value={this.state.author} placeholder='Author...' type="text" className="input-info" onChange={(event) => { this.changeAuthorHandler(event) }} />
                    </div>
                    <div className='input-section'>
                        <label className='label-input'>Year: </label>
                        <input value={this.state.year} placeholder='Year...' type="number" className="input-info" onChange={(event) => { this.changeYearHandler(event) }} />
                    </div>
                    <button className='add-btn' onClick={(event) => { this.submitFormHandler(event) }}>Add Books</button>
                </div>

                <div className='table-section'>
                    <div className='table-header'>
                        <p>Title</p>
                        <p>Author</p>
                        <p>Year</p>
                    </div>
                    {
                        this.state.Books.map((book) => (
                            <Book key={book.id} {...book} />
                        ))
                    }
                </div>
            </div>
        )
    }
}
