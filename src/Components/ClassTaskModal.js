import React, { Component } from 'react'

//Style Components
import Modal from 'react-modal'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'


//Styles
import '../Styles/TaskModalEdit.css'

export default class ClassTaskModal extends Component {
    constructor(props){
        super(props);

        const { title, description } = this.props.task;

        this.state = {

            originalTitle: title,
            originalDescription: description,

            title: title,
            description: description,

            modalIsOpen: false
        }
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })

    }

    saveChanges = (event) => {
        event.preventDefault();
        const { updateTheTask, task } = this.props;
        const { title, description } = this.state;

        const updatedTask = {
            id: task.id,
            title: title,
            description: description
        }

        this.setState({
            id: task.id,
            title: title,
            description: description
        })
        updateTheTask(updatedTask);

        this.setState({
            modalIsOpen: false
        })

    }

    cancelChanges = () => {
        const { updateTheTask, task } = this.props;
        const { originalTitle, originalDescription } = this.state;

        this.setState({
            id: task.id,
            title: originalTitle,
            description: originalDescription
        })

        // updateTheTask(updatedTask);

        this.setState({
            modalIsOpen: false
        })
    }

    render() {
        const { title, description, modalIsOpen } = this.state

        return (
            <div>
                <input type="button" className="btn btn-outline-warning" onClick={() => this.setState({modalIsOpen: true})} value="Edit task"/>
                <Modal
                    size="sm"
                    className="taskModalStyle"
                    isOpen={modalIsOpen}
                    onRequestClose={() => this.setState({
                        modalIsOpen: false
                        })}

                    ariaHideApp={false}
                    shouldCloseOnOverlayClick={false}
                >
                    <Form onSubmit={ this.saveChanges }>
                        <Form.Row>
                            <Col md>
                                <Form.Control
                                    id="input_modal_title"
                                    className="inputs_modal"
                                    name="title"
                                    placeholder="Enter the title.."
                                    value={ title }
                                    onChange={this.handleOnChange}
                                />
                            </Col>
                        </Form.Row>
                        <Form.Row >
                            <Col md>
                                <Form.Control
                                    id="input_modal_desc"
                                    className="inputs_modal"
                                    name="description"
                                    as="textarea"
                                    rows="4"
                                    placeholder="enter a description.."
                                    value={ description }
                                    onChange={this.handleOnChange}
                                />
                            </Col>
                        </Form.Row>
                        <div className="">
                            <input type="submit" name="submit" className="btn btn-info btn-md" value="Save"
                            <input
                                type="button"
                                className="btn dark btn-md"
                                value="Cancel"
                                onClick={ this.cancelChanges }
                            />
                        </div>
                    </Form>
                </Modal>
            </div>
        )
    }
}
