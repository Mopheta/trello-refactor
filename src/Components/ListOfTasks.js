import React from 'react'

//Components
import TaskModalEdit from './TaskModalEdit'

//Style Components
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

//Style

const ListOfTasks = ({ task }) =>  {

    return (
        <div>
            <Form >
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
                    <TaskModalEdit task={ task }/>

                </Form.Group>
            </Form>    
        </div>
    )
    
}

export default ListOfTasks;
