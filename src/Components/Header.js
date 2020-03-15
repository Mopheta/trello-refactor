import React from 'react'

//Components

//Style Components
import TextField from '@material-ui/core/TextField';
import TableChartIcon from '@material-ui/icons/TableChart';

//Style
import '../Styles/Header.css'

const Header = () =>  {

    return (
        <div>
            <form className="header_form">
                <TableChartIcon className="boardIcon" style={{ fontSize: 50, marginRight: 10 }}/>
                <TextField 
                    id="standard-basic"
                    className="board_name" 
                    label="Board Name"                      
                />
            </form>
        </div>
    )
    
}

export default Header;
