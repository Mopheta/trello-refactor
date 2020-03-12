import React, { useState } from 'react'
import Task from './Task'
import ListOfTasks from './ListOfTasks'

//Style
import '../Styles/Pipeline.css'

const Pipeline = ({ addTaskToPipelineBy, pipeline, deletePipeline }) => {
    const [tasks, setTasks] = useState([]);
    const [showTaskCreation, setShowTaskCreation] = useState(false);

    const addTaskToPipeline = (task) => {
        // console.log('my task created: ', task)
        setTasks([...tasks, task]);
        setShowTaskCreation(!showTaskCreation);
    }

    const taskCreation = () => {
        setShowTaskCreation(!showTaskCreation);
    }

    const removePipeline = () => {
        deletePipeline(pipeline);
    }

   console.log(pipeline)
    return(     
        <div>
            <div>
                <h3>{ pipeline.name }</h3>
                <input type="button" value="Delete" onClick={removePipeline} />
            </div>
            <div className="listOfTask">
                {
                    tasks.length > 0 &&
                    tasks.map(t => <ListOfTasks task={t} key={t.id}/>)
                }
            </div>
            <div>
                
                {
                    !showTaskCreation &&
                    <input type="button" className="btn btn-info" value="Add task" onClick={ taskCreation } />
                }
            </div>
            <div>
                {   
                    showTaskCreation &&
                    <div>
                        <Task addTaskToPipeline={addTaskToPipeline}/>
                    </div>
                }
            </div>
        </div>
        
    )
}

export default Pipeline;