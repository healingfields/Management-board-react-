import styled from 'styled-components';

const TaskWrapper = styled.div`
    background: #1B2430;
    padding: 20px;
    margin-top:2%;
    color:whitesmoke;
    
    h3{
        width: 100%;
        margin: 0;
        color:#DF7861;
        font-size:1.5rem;
    }
    p{
        font-size:1.2rem;
    }`;

function Task({ id, body, title, onDragStart }) {
    return (
        <TaskWrapper
            draggable
            onDragStart={(e) => onDragStart(e, id)}>
            <h3>{title}</h3>
            <p>{body}</p>
        </TaskWrapper>
    )
}

export default Task