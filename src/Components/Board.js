import React, { Component } from 'react'

//Components
import Header from './Header'
import CreatePipeline from './CreatePipeline'
import Pipeline from './Pipeline'

//Styles
import '../Styles/Board.css'

export default class Board extends Component {
    constructor(props){
        super(props);

        this.state = {
            pipelines: []
        }
    }
    
    addNewPipeline = (pipeline) => {
        const { pipelines } = this.state;
        this.setState({
            pipelines: [...pipelines, pipeline]
        })
       
    }

    addTaskToPipelineById = (pipeline) => {
        // const { pipelines } = this.state;
        // const myPipeline = pipelines.find(p => p.id === pipeline.id);
        // console.log('PIPELINE FILTER: ', myPipeline)
        // myPipeline.tasks = [...myPipeline.tasks, tasks];
        // console.log('tasks in pipeline', myPipeline.tasks)
        
    }

    deletePipeline = (pipeline) => {
        const { pipelines } = this.state;
        const pipelinesAfterDelete = pipelines.filter(p => p.id !== pipeline.id);
        console.log("sin la que se borra: ", pipelinesAfterDelete)
        this.setState({
            pipelines: [...pipelinesAfterDelete]
        })
    }

    render() {
        const { pipelines } = this.state;
        return (
            <div>
                <div>
                    <Header />
                </div>
                <div>
                    <CreatePipeline addPipeline={ this.addNewPipeline } />
                </div>
                <div className="flex-container board_pipeline">
                    {
                        pipelines.map(p => <Pipeline addTaskToPipelineById={ this.addTaskToPipelineById } 
                                                     pipeline={ p } 
                                                     key={ p.id }
                                                     deletePipeline={ this.deletePipeline }       
                                            />)
                    }
                </div>
                
            </div>
        )
    }
}
