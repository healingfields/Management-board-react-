import styled from 'styled-components';

import Task from '../Task/Task';

const LaneContainer = styled.div`
    min-height:5ovh;
    width:20vw;
    border:1px solid #F0EBE3;
    border-radius:10px;
    text-align:left;
    background:#816797;
    `;

const LaneHeader = styled.h3`
    color:#E4DCCF;
    text-align:center;
    border-bottom: 1px solid #1B2430;
    padding-bottom: 10px;
    font-size:1.8rem`;

function Lane({ laneId, name, error, loading, tasks, onDragStart, onDragOver, onDrop }) {
    return (
        <LaneContainer className='lane-container' onDragOver={onDragOver} onDrop={(e) => onDrop(e, laneId)}>
            <LaneHeader>{name}</LaneHeader>
            {tasks.map((task) => (
                <Task
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    body={task.body}
                    onDragStart={onDragStart}

                />
            ))}
        </LaneContainer>
    )
}

export default Lane