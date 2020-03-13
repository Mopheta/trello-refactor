import React, { useState, useReducer } from 'react'

//Components


//Style Components
import Modal from 'react-modal'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

//Style
import '../Styles/TaskModalEdit.css'

const TaskModalEdit = ({ task, updateTheTask }) =>  {

    const { title, description } = task; //to set the value on the fields

    let [modalIsOpen, setModalIsOpen] = useState(false);

    const [userInput, setUserInput] = useReducer(
        (state, newState) => ({...state, ...newState}),
        {
            title: '',
            description: ''
        }
    );

    const handleOnChange = event => {
        const { name, value } = event.target;

        setUserInput({ ...userInput, [name]: value });
        name === 'title' ?  task.title = value
        : task.description = value;
      };

    const update = () => {
        //debugger;
        const data = { userInput };
        const { title, description } = data.userInput

        const updatedTask = {
            id: task.id,
            title: title,
            description: description 
        }
        console.log('con update', updatedTask)
        updateTheTask(updatedTask);
    }

    const cancelChanges = () => {
        
    }

    return (
        <div>
            <input type="button" className="btn btn_Edit" onClick={() => setModalIsOpen(true)} value="Edit"/>
            <Modal
                size="sm"
                className="taskModalStyle"
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                ariaHideApp={false}
                shouldCloseOnOverlayClick={false}
            >
                <Form >
                    <Form.Row>
                        <Col md>
                            <Form.Control
                                id="input_modal_title" 
                                className="inputs_modal"
                                name="title" 
                                placeholder="Enter the title.." 
                                value={title}
                                onChange={handleOnChange}
                            />
                        </Col>
                    </Form.Row>
                    <Form.Row >
                        <Col md>
                            <Form.Control 
                                id="input_modal_desc"
                                className="inputs_modal"
                                as="textarea" 
                                rows="4"
                                name="description"
                                placeholder="enter a description.."
                                value={description}  
                                onChange={handleOnChange}
                            />
                        </Col>
                    </Form.Row>
                    <div className="">
                        <input type="button" name="submit" className="btn btn-info btn-md" value="Update"
                        onClick={ () => {
                            update();
                            setModalIsOpen(false);
                            }} />   

                        <input type="button" name="" className="btn dark btn-md" value="Cancel"
                        onClick={ () => {
                            cancelChanges();
                            //handleCancelClick();
                            setModalIsOpen(false);
                        }} />   
                    </div>
                </Form>  
            </Modal>    
        </div>
    )
    
}

export default TaskModalEdit;
