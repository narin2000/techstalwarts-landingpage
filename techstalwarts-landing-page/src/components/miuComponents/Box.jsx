import React, { forwardRef } from "react";
import MBox from '@mui/material/Box';

const Box = forwardRef((props, ref) =>{
    return <MBox ref={ref} {...props}/>
})

export default React.memo(Box);