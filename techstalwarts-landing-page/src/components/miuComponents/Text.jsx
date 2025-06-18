import React from "react";

import Typography from "@mui/material/Typography";
const Text = (props) => {
  const { children, ...restProps } = props;

  return <Typography component={'div'} {...restProps}>{children}</Typography>;
};

export default React.memo(Text);