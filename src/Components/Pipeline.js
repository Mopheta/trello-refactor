import React, { useState } from 'react'
import Task from './Task'
import ListOfTasks from './ListOfTasks'

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
        debugger
        //const updatedTask = tasks.find(t => t.id === task.id);
       // const removeTheTask = tasks.filter(t => t.id !== task.id);
        setTasks([...tasks]);
        
    }


    return(     
        <div>
            <div>
                <h3>{ pipeline.name }</h3>
                <input type="button" value="Delete" onClick={removePipeline} />
            </div>
            <div className="listOfTask">
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