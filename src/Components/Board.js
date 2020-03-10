import React, { Component } from 'react'
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
        console.log(pipeline)
        const { pipelines } = this.state;
        this.setState({
            pipelines: [...pipelines, pipeline]
        })
    }

    addTaskToPipeline = () => {
        console.log("hello world2")
    }

    render() {
        const { pipelines } = this.state;
        console.log(pipelines)
        return (
            <div>
                <div>
                    <CreatePipeline addPipeline={ this.addNewPipeline } />
                </div>
                <div className="flex-container">
                    {
                        pipelines.map(p => <Pipeline  addTaskToPipeline={this.addTaskToPipeline} pipeline={p}/>)
                    }
                </div>
                
            </div>
        )
    }
}
