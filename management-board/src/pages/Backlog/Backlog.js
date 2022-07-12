import React from 'react'
import Task from '../../components/Task/Task';
import useDataFetching from '../../hooks/useDataFetching';
import './Backlog.css'
import styled from 'styled-components';


function Backlog() {

    const BacklogContainer = styled.div`
        display: flex;
        flex-direction: column;
        margin: 5% 5% 0% 5%;
        padding-bottom: 5%;
        
        h2{
            width: 100%;
            text-align: center;
            border-bottom: 1px solid darkcyan;
            padding-bottom: 10px;
            color: whitesmoke;
            font-size: 3rem;
            font-weight: 500;
        }`;

    const TasksContainer = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex-wrap: wrap;
        margin: 5%;`;

    const [loading, error, tasks] = useDataFetching(
        'https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/tasks'
    )
    return (
        <BacklogContainer>
            <h2 >Backlog</h2>
            <TasksContainer>
                {loading || error ? (
                    <span>{error || 'loading...'}</span>
                ) : (

                    tasks.map((task) => (
                        <Task
                            key={task.id}
                            title={task.title}
                            body={task.body} />
                    ))
                )}

            </TasksContainer>
        </BacklogContainer>
    )
}

export default Backlog