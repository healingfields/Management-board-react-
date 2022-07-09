import React from 'react';
import './Lane.css';

import Task from '../Task/Task';


function Lane({ name, error, loading, tasks }) {
    return (
        <div className='lane-container'>
            <h3>{name}</h3>
            {tasks.map((task) => (
                <Task
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    body={task.body} />
            ))}
        </div>
    )
}

export default Lane