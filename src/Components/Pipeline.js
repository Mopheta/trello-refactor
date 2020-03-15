import React, { useState } from 'react'
import Task from './Task'
import ListOfTasks from './ListOfTasks'

//Component Style

//Style
import '../Styles/Pipeline.css'

const Pipeline = ({ pipeline, deletePipeline }) => {
    const [tasks, setTasks] = useState([]);
    const [showTaskCreation, setShowTaskCreation] = useState(false);

    const addTaskToPipeline = (task) => {
        setTasks([...tasks, task]);
        setShowTaskCreation(!showTaskCreation);
    }

    const taskCreation = () => {
        setShowTaskCreation(!showTaskCreation);
    }

    const removePipeline = () => {
        deletePipeline(pipeline);
    }

    const updateTask = (task) => {
        const removeTheTask = tasks.filter(t => t.id !== task.id);
        setTasks([...removeTheTask, task]);
        
    }


    return(     
        <div className="pipeline_style">
            <div >
                <h3 className="pipeline_title">{ pipeline.name }</h3>
                <input type="button" id="delete_pipeline" className="btn btn-outline-danger" value="Delete pipeline" onClick={removePipeline} />
            </div>
            <div className="list_of_task">
                {
                    tasks.length > 0 &&
                    tasks.map(t => <ListOfTasks task={t} key={t.id} updateTask={ updateTask }/>)
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