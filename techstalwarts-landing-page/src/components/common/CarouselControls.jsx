import React from "react";
import { IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import Box from "../miuComponents/Box";

const CarouselControls = ({ activeIndex = 0, total = 3, onPrev, onNext }) => {
  return (
    <Box display="flex" alignItems="center" gap={2}>
      {/* Previous Button */}
      <IconButton
        onClick={onPrev}
        sx={{
          bgcolor: "#83c7f5",
          color: "#fff",
          "&:hover": { bgcolor: "#4daef0" },
        }}
      >
        <ArrowBackIos fontSize="small" />
      </IconButton>

      <Box display="flex" gap={1}>
        {Array.from({ length: total }).map((_, index) => (
          <Box
            key={index}
            sx={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              bgcolor: index === activeIndex ? "#2d3559" : "#d0d5e4",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </Box>

      <IconButton
        onClick={onNext}
        sx={{
          border: "1px solid #d0d5e4",
          color: "#2d3559",
          bgcolor: "#fff",
          "&:hover": { bgcolor: "#f0f2f5" },
        }}
      >
        <ArrowForwardIos fontSize="small" />
      </IconButton>
    </Box>
  );
};

export default CarouselControls;
