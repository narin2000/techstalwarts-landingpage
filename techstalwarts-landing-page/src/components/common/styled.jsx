import React from "react";
import Box from "../miuComponents/Box";
import { styled } from '@mui/system';


const style = (Element = Box) =>{
    return (css={}) =>{
        return styled(Element)(css);
    }
}

export default style;