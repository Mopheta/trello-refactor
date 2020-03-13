import React, { useState } from 'react'

//Components
import uuid from "uuid"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

//Styles
import '../Styles/CreatePipeline.css'

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
        <div className="create_pipeline_div">
            <div>
                {/* <input id="input_title"
                type="text"
                aria-describedby="basic-addon1" 
                className="" 
                placeholder="Enter pipeline title.." 
                onChange={ handleOnChangeEvent }                                    
                /> */}                
                <TextField 
                    id="input_title" 
                    placeholder="Enter pipeline title.." 
                    variant="outlined"
                    onChange={ handleOnChangeEvent }           
                />
                <Button 
                    id="btn_addNewList" 
                    className="btn btn-info"
                    variant="contained"  
                    onClick={ createNewPipeline } 
                >
                    New Pipeline
                </Button>
            </div>
            <div>

            </div>
        </div>
    )
}

export default CreatePipeline;