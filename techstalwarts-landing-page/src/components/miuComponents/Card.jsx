import React from "react";

import { Card as XCard } from "@mui/material";

const Card = ({ children, ...restProps }) => {
  return <XCard {...restProps}>{children}</XCard>;
};

export default Card;
