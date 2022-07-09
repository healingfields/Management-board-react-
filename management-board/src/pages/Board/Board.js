import useDataFetching from '../../hooks/useDataFetching';
import Lane from '../../components/Lane/Lane';
import './Board.css';

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
    return (
        <div className='board-container'>
            {lanes.map((lane) => (
                <Lane key={lane.id}
                    name={lane.name}
                    loading={loading}
                    error={error}
                    tasks={data.filter((task) =>
                        task.lane === lane.id)} />
            ))}
        </div>
    )
}

export default Board