import React, { useState } from 'react'
import uuid from "uuid"

const CreatePipeline = ({ addPipeline }) => {
    const [pipelineName, setPipelineName] = useState('');

    const handleOnChangeEvent = (event) => {
        const { value } = event.target;
        setPipelineName(value);
    }

    const createNewPipeline = () => {
        const data = pipelineName;
        const newPipeline = {
            id: uuid(),
            name: data,
            tasks: []
        }
        addPipeline(newPipeline);
    }

    return(
        <div>
            <div>
                <input id="input_title"
                type="text"
                aria-describedby="basic-addon1" 
                className="" 
                placeholder="Enter pipeline title.." 
                onChange={ handleOnChangeEvent }                                    
                />
            </div>
            <div>
                <input type="button" 
                value="Add pipeline" 
                id="btn_addNewList" 
                className="btn btn-info"  
                onClick={ createNewPipeline } 
                />
            </div>
        </div>
    )
}

export default CreatePipeline;