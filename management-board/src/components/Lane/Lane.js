import React from 'react';
import './Lane.css';

import Task from '../Task/Task';


function Lane({ laneId, name, error, loading, tasks, onDragStart, onDragOver, onDrop }) {
    return (
        <div className='lane-container' onDragOver={onDragOver} onDrop={(e) => onDrop(e, laneId)}>
            <h3>{name}</h3>
            {tasks.map((task) => (
                <Task
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    body={task.body}
                    onDragStart={onDragStart}

                />
            ))}
        </div>
    )
}

export default Lane