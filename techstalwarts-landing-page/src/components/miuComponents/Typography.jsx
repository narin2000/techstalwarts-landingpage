import React from "react";
import { Typography as XTypography } from "@mui/material";

const Typography = ({ children, ...restProps }) => {
  return <XTypography {...restProps}>{children}</XTypography>;
};

export default Typography;
