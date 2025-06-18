// components/common/InfoCard.js
import React from "react";
import Typography from "../miuComponents/Typography";
import Box from "../miuComponents/Box";
import style from "../common/styled";

const InfoCard = ({ imgSrc, label, title, ...sx }) => {
  return (
    <CardContainer sx={{ ...sx }}>
      {imgSrc && (
        <img src={imgSrc} alt={label || title} width={40} height={40} />
      )}
      {label && (
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 500,
            mt: 1,
            textAlign: "center",
          }}
        >
          {label}
        </Typography>
      )}
      {title && (
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 500,
            mt: 1,
            textAlign: "center",
          }}
        >
          {title}
        </Typography>
      )}
    </CardContainer>
  );
};

export default InfoCard;

const CardContainer = style(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "16px",
  background: "#fff",
  boxShadow: "0 0 8px rgba(0,0,0,0.05)",
  borderRadius: "12px",
  width: "100px",
}));
