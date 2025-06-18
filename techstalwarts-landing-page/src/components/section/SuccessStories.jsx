import React from "react";
import style from "../common/styled";
import Box from "../miuComponents/Box";
import LayoutWrapper from "../common/Layout";
import Typography from "../miuComponents/Typography";

const SuccessStories = ({ features }) => {
  return (
    <SectionContainer>
      <TopRow>
        <ImageBox>
          <img
            src="../src/assets/hiringModel.svg"
            alt="hiringModel"
            style={{ width: "100%", maxWidth: "200px" }}
          />
        </ImageBox>
        <TextBox>
          <Typography
            sx={{ fontSize: "16px", fontWeight: "bold", color: "#63BAFF" }}
          >
            Outsourcing
          </Typography>
          <HeadingText>Hiring Models</HeadingText>
        </TextBox>
      </TopRow>
      <LayoutWrapper>
        <BoxWrapper>
          <Box sx={{ }}>
            <img
              src="../src/assets/modal.svg"
              alt="Modal"
              style={{ width: "100%", maxWidth: "300px" }}
            />
          </Box>
          <Box>
            <Box sx={{ width: "300px" }}>
              {features.map((model) => (
                <Box key={model.id} sx={{ mb: 3 }}>
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                  >
                    <Typography
                      sx={{
                        fontSize: "30px",
                        fontWeight: "bold",
                        color: "#DCF0FF",
                      }}
                    >
                      {model.id}
                    </Typography>
                    <Typography
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "#0E3572",
                        textAlign: "center",
                      }}
                    >
                      {model.title}
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      marginLeft: "42px",
                      fontWeight: "500",
                      color: "#576272",
                    }}
                  >
                    {model.description}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </BoxWrapper>
      </LayoutWrapper>
    </SectionContainer>
  );
};

export default SuccessStories;

const SectionContainer = style(Box)(() => ({
  backgroundColor: "#ffffff",
  paddingTop: "100px",
  paddingBottom: "40px",
}));

const HeadingText = style(Typography)(({ theme }) => ({
  color: "#1E3864",
  fontSize: "24px",
  fontWeight: "bold",
  [theme.breakpoints.down("sm")]: {
    fontSize: "20px",
    marginBottom: "8px",
  },
}));

const TopRow = style(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "70px",
  flexWrap: "wrap",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    textAlign: "center",
  },
}));

const ImageBox = style(Box)(({ theme }) => ({
  flexShrink: 0,
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
  },
}));

const TextBox = style(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
  },
}));

const BoxWrapper = style(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent:"center",
  gap: "100px",
//   justifyContent: "space-between",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    textAlign: "center",
  },
}));
