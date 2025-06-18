import React from "react";
import MGrid from '@mui/material/Grid';

const Grid = (props) =>{
    return <MGrid {...props}/>
}

export default React.memo(Grid);