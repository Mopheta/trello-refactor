import React, { useState } from 'react'
import Task from './Task'
import uuid from "uuid"

const Pipeline = ({ addPipeline, p }) => {
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



    return(
        <div>
            <div>
                <div>
                    <Task />
                    {/* addPipeline={ this.addNewPipeline }  */}
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Pipeline;