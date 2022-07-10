import React from 'react'
import './Task.css'

function Task({ id, body, title, onDragStart }) {
    return (
        <div className='task-container'
            draggable
            onDragStart={(e) => onDragStart(e, id)}>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    )
}

export default Task