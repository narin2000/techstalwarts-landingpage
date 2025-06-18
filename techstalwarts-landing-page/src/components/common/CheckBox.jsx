import React from "react";
import PropTypes from "prop-types";
import FormControlLabel from "@mui/material/FormControlLabel";
import MuiCheckbox from "../miuComponents/Checkbox";
import Box from "../miuComponents/Box";

import { Stack, Typography } from "@mui/material";

const Checkbox = ({
  style,
  label,
  color,
  onChange,
  onClick,
  required = false,
  option = [],
  direction = "row",
  error = false,
  helperText = "",
  checkedValues,
  ...restProps
}) => {
  const handleChange = (checked, value) => {
    if (onChange) {
      onChange({ [value]: checked });
    }
  };

  const renderCheckbox = (itemLabel, value, key) => (
    <FormControlLabel
      key={key}
      style={{ fontWeight: "500", color: "#374151" }}
      control={
        <MuiCheckbox
          size="small"
          onClick={onClick}
          checked={checkedValues?.includes(value)}
          sx={{
            fontSize: "15px !important",
            color: color || "#374151",
            padding: "3px",
            width: "15px !important",
            height: "6px",
            "& .MuiSvgIcon-root": {
              fontSize: "17px !important",
              width: "20px !important",
              color: error && "#d32f2f",
            },
            "&.Mui-checked .MuiSvgIcon-root": {
              color: "#1455FF !important",
              fontSize: "17px !important",
            },
            ...style,
          }}
          inputProps={{ "aria-label": "primary checkbox" }}
          onChange={(e) => handleChange(e.target.checked, value)}
          value={value}
          {...restProps}
        />
      }
      label={
        <>
          {itemLabel} {required && <span style={{ color: "red" }}>*</span>}
        </>
      }
      sx={{
        "& .MuiTypography-root": {
          fontSize: "14px",
          paddingLeft: "10px",
          fontWeight: "600",
        },
        "&::selection": {
          background: "transparent !important",
        },
        "&.Mui-checked .MuiSvgIcon-root": {
          color: "#1455FF !important",
          fontSize: "17px !important",
        },
      }}
    />
  );

  const checkboxGroup =
    Array.isArray(option) && option.length > 0 ? (
      <Stack direction={direction} spacing={2} flexWrap="wrap" gap={"50px"}>
        {option.map((opt, index) =>
          renderCheckbox(opt.label || "Option", opt.value || "", index)
        )}
      </Stack>
    ) : (
      renderCheckbox(label || "Checkbox", restProps.value || "", "single")
    );

  return (
    <Box sx={{ position: "relative" }}>
      {/* <Box > */}
      {checkboxGroup}
      {error && helperText && (
        <Typography
          sx={{
            position: "absolute",
            color: "#d32f2f",
            fontSize: "12px",
            marginTop: "4px",
            marginLeft: "14px",
            "&::selection": {
              background: "transparent !important",
            },
          }}
        >
          {helperText}
        </Typography>
      )}
    </Box>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  style: PropTypes.object,
  required: PropTypes.bool,
  option: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
  direction: PropTypes.oneOf(["row", "column"]),
  error: PropTypes.bool,
  helperText: PropTypes.string,
};

export default React.memo(Checkbox);
