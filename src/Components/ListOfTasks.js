import React from 'react'

//Components
import TaskModalEdit from './TaskModalEdit'
import ClassTaskModal from './ClassTaskModal'

//Style Components
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

//Style
import '../Styles/ListOfTasks.css'

const ListOfTasks = ({ task, updateTask }) =>  {

    const updateTheTask = (task) => {
        updateTask(task)
    }

    return (
        <div>
            <Form className="list_of_tasks">
                <Form.Row className="margin_between_inputs">
                    <Col lg>
                        <Form.Control 
                            name="title"
                            value={task.title}
                            readOnly
                        />
                    </Col>
                </Form.Row>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control 
                        as="textarea" 
                        rows="4"
                        name="description"
                        value={task.description}
                        readOnly
                    />
                </Form.Group>
                <Form.Group>
                    {/* <TaskModalEdit task={ task } updateTheTask={ updateTheTask }/> */}
                    <ClassTaskModal task={task} updateTheTask={ updateTheTask }/>
                </Form.Group>  
            </Form>    
        </div>
    )
    
}

export default ListOfTasks;
