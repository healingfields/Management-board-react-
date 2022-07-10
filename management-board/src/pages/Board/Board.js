import useDataFetching from '../../hooks/useDataFetching';
import Lane from '../../components/Lane/Lane';
import './Board.css';
import { useEffect, useState } from 'react';

function Board() {

    const lanes = [
        { id: 1, title: 'To Do' },
        { id: 2, title: 'In Progress' },
        { id: 3, title: 'Review' },
        { id: 4, title: 'Done' },
    ];

    const [loading, error, data] = useDataFetching(
        'https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/tasks'
    )

    const [tasks, setTasks] = useState([]);

    function onDragStart(e, id) {
        e.dataTransfer.setData('id', id)
    }
    function onDragOver(e) {
        e.preventDefault();
    }
    function onDrop(e, laneId) {
        const id = e.dataTransfer.getData('id');
        const updatedTasks = tasks.filter((task) => {
            if (task.id.toString() === id) {
                task.lane = laneId;
                console.log(task.title, task.lane);
            }
            return task;


        })
        console.table(updatedTasks)
        setTasks(updatedTasks);
    }


    useEffect(() => {
        setTasks(data)
    }, [data])

    return (
        <div className='board-container'>
            {lanes.map((lane) => (
                <Lane key={lane.id}
                    name={lane.title}
                    loading={loading}
                    error={error}
                    laneId={lane.id}
                    tasks={data.filter((task) =>
                        task.lane === lane.id)}
                    onDragStart={onDragStart}
                    onDragOver={onDragOver}
                    onDrop={onDrop} />
            ))}
        </div>
    )
}

export default Board