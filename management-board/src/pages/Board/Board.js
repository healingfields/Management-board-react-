import React, { useEffect, useState } from 'react';
import Lane from '../../components/Lane/Lane';
import './Board.css';

function Board() {
    const lanes = [
        { 'id': 1, name: 'To do' },
        { 'id': 2, name: 'In Progress' },
        { 'id': 3, name: 'Review' },
        { 'id': 4, name: 'Done' }
    ]
    const [loading, setLoading] = useState(true);
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await fetch(
                    'https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/tasks'
                )
                const result = await data.json();

                if (result) {
                    setTasks(result);
                    setLoading(false);
                }
            }
            catch (e) {
                setLoading(false);
                setError(e.message);
            }
        }
        fetchData();
    }, [])
    return (
        <div className='board-container'>
            {lanes.map((lane) => (
                <Lane key={lane.id}
                    name={lane.name}
                    loading={loading}
                    error={error}
                    tasks={tasks.filter((task) =>
                        task.lane === lane.id)} />
            ))}
        </div>
    )
}

export default Board