import React, { forwardRef } from "react";
import { Checkbox as MCheckbox } from '@mui/material';

const MuiCheckbox = forwardRef((props, ref) => {
    return <MCheckbox sx={{
        ".MuiFormControlLabel-root>.MuiButtonBase-root>.MuiSvgIcon-root":{
            fontSize:"1px"
        }
    }} ref={ref} {...props} />;
});

export default React.memo(MuiCheckbox);
