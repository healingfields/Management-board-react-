import React from 'react'
import './Task.css'

function Task({ body, title }) {
    return (
        <div className='task-container'>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    )
}

export default Task