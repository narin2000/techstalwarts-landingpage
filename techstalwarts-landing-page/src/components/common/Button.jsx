import React from "react";
import MButton from "@mui/material/Button"
import style from "./styled";

const StyleBtn = style(MButton)(({ theme, variant, disabled = false }) => {
  return {
    [theme.breakpoints.down("sm")]: {
      padding: "9px 5px",
    },
    padding: "9px 16px 10px 16px",
    fontSize: "12px",
    fontWeight: "400",
    textTransform: "capitalize",
    boxShadow: "none",
    minWidth: "104px",
    ...(variant === "contained" && {
      border: `1px solid ${!disabled ? "#1455FF" : "#e0e0e0"}`,
      backgroundColor: "#1455FF",
      color: "#fff",
      "&.Mui-disabled": {
        backgroundColor: "#9CA3AF",
        color: "#ffffff", 
      },
    }),
    ...(variant === "outlined" && {
      fontWeight: "500",
      // border: `1px solid ${theme.palette.secondary.main}`,
      color: "#111928",
      backgroundColor: "transparent",
    }),
  };
});

const Button = ({ isLoading = false, children, ...props }) => {
  return (
    <StyleBtn loading={isLoading} {...props}>
      {children}
    </StyleBtn>
  );
};

export default React.memo(Button);
