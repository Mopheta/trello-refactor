import React, { useState } from 'react'
import Task from './Task'
import uuid from "uuid"

const Pipeline = ({ addPipeline, pipeline }) => {
    const [tasks, setTasks] = useState([]);

    // const handleOnChangeEvent = (event) => {
    //     const { value } = event.target;
    //     setPipelineName(value);
    // }

    // const createNewPipeline = () => {
    //     const data = pipelineName;
    //     const newPipeline = {
    //         id: uuid(),
    //         name: data,
    //         tasks: []
    //     }
    //     addPipeline(newPipeline);
    // }

    const addTaskToPipeline = (task) => {
        console.log(task)
        setTasks(task)
    }

    
    return(
        <div>
            <div>
                <div>
                    <div>
                        <h3>{ pipeline.name }</h3>
                    </div>
                    <Task addTaskToPipeline={addTaskToPipeline}/>
                    
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Pipeline;