import React, { useReducer } from 'react'
import uuid from "uuid";

//Components


//Style Components
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

//Style
import '../Styles/Task.css'

const Task = ({ addTaskToPipeline, task }) =>  {
    const [userInput, setUserInput] = useReducer(
        (state, newState) => ({...state, ...newState}),
        {
            title: '',
            description: ''
        }
    );

    const onChangeFields = (event) => {
        const name = event.target.name;
        const newValue = event.target.value;

        setUserInput({[name]: newValue})
    }

    const saveTask = () => {
        const data = userInput;
        const newTask = {
            id: uuid(),
            title: data.title,
            description: data.description 
        }
        addTaskToPipeline(newTask);
    }

    const deleteTask = () => {
        
    }

    return (
            <Form >
                <Form.Row className="margin_between_inputs">
                    <Col lg>
                        <Form.Control 
                            name="title" 
                            placeholder="enter the title.." 
                            onChange={onChangeFields}
                        />
                    </Col>
                </Form.Row>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control 
                        as="textarea" 
                        rows="4"
                        name="description"
                        placeholder="enter a description.."
                        onChange={onChangeFields}
                        
                    /> 
                </Form.Group>
                <input type="button" name="submit" className="btn btn-info btn_save" value="Save"
                    onClick={ saveTask } 
                />
            </Form>    
    )
    
}

export default Task;
