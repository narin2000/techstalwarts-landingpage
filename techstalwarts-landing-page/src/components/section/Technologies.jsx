import React, { useState } from "react";
import LayoutWrapper from "../common/Layout";
import Typography from "../miuComponents/Typography";
import Box from "../miuComponents/Box";
import style from "../common/styled";
import CarouselControls from "../common/CarouselControls";
import InfoCard from "../common/Cards";

const Technologies = ({ techSlides, hiringCard }) => {
    const [activeIndex, setActiveIndex] = useState(0);
  const total = techSlides?.length;

  const handlePrev = () => setActiveIndex((prev) => Math.max(prev - 1, 0));
  const handleNext = () =>
    setActiveIndex((prev) => Math.min(prev + 1, total - 1));

  const { description, items } = techSlides[activeIndex];

  return (
    <SectionContainer>
      <LayoutWrapper>
        <Typography
          sx={{ fontSize: "16px", fontWeight: "bold", color: "#63BAFF" }}
        >
          TECHNOLOGY
        </Typography>

        <HeaderBox>
          <HeadingText>Technologies We Work On</HeadingText>
          <CarouselBox>
            <CarouselControls
              activeIndex={activeIndex}
              total={total}
              onPrev={handlePrev}
              onNext={handleNext}
            />
          </CarouselBox>
        </HeaderBox>

        <ContentWrapper>
          <DescriptionText>{description}</DescriptionText>

          <CardsWrapper>
            {items.map((item, idx) => (
              <InfoCard key={idx} imgSrc={item.src} label={item.label} />
            ))}
          </CardsWrapper>
        </ContentWrapper>
      </LayoutWrapper>

      <HireContainer>
        <LayoutWrapper>
          <Typography
            sx={{
              fontSize: "26px",
              fontWeight: "700",
              color: "#ffffff",
              textAlign: "center",
              padding: "40px 0",
            }}
          >
            Why Hire From Us?
          </Typography>
          <HireCardsWrapper>
            {hiringCard?.map((card, idx) => (
              <Box
                key={idx}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Hireimg>
                  <img
                    src={card.src}
                    alt={card.title || `hire-${idx}`}
                    width="50px"
                  />
                </Hireimg>
                <HireLabel>{card.label}</HireLabel>
                <HireText>{card.title}</HireText>
              </Box>
            ))}
          </HireCardsWrapper>
        </LayoutWrapper>
      </HireContainer>
    </SectionContainer>
  );
};

export default Technologies;

// Styled Components
const SectionContainer = style(Box)(() => ({
  backgroundColor: "#ffffff",
  paddingTop: "100px",
  paddingBottom: "40px",
}));

const HeaderBox = style(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
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

const CarouselBox = style(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    marginTop: "8px",
  },
}));

const ContentWrapper = style(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "40px",
  marginTop: "30px",
  marginBottom: "80px",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

const DescriptionText = style(Typography)(({ theme }) => ({
  maxWidth: "300px",
  fontSize: "20px",
  color: "#596373",
  fontWeight: "400",
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
  },
}));

const CardsWrapper = style(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "16px",
  justifyContent: "center",
  [theme.breakpoints.down("lg")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },

  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
}));

const HireContainer = style(Box)(({ theme }) => ({
  backgroundColor: "#34A6DE",
  paddingBottom: "80px",
}));
const HireCardsWrapper = style(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "16px",
  justifyContent: "center",
  [theme.breakpoints.down("lg")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },

  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
}));
const Hireimg = style(Box)(({ theme }) => ({
  textAlign: "center",
  width: "100px",
  height: "100px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#ffffff",
  borderRadius: "50%",
  marginBottom: " 20px",
}));
const HireLabel = style(Typography)(({ theme }) => ({
  fontSize: "20px",
  fontWeight: "700",
  color: "#ffffff",
  textAlign: "center",
  marginBottom: "10px",
}));
const HireText = style(Typography)(({ theme }) => ({
  fontSize: "14px",
  fontWeight: "500",
  color: "white",
  textAlign: "center",
  padding: "0px 30px",
}));
