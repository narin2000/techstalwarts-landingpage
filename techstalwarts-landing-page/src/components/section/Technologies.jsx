import React, { useState } from "react";
import LayoutWrapper from "../common/Layout";
import Typography from "../miuComponents/Typography";
import Box from "../miuComponents/Box";
import style from "../common/styled";
import CarouselControls from "../common/CarouselControls";
import InfoCard from "../common/Cards"; 

const Technologies = ({ techSlides }) => {
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
              fontSize: "20px",
              fontWeight: "700",
              color: "#ffffff",
              textAlign: "center",
              padding: "20px 0",
            }}
          >
            Why Hire From Us?
          </Typography>
          <CardsWrapper>
            {/* Example use of InfoCard */}
            <InfoCard imgSrc="/icons/star.svg" title="Skilled Engineers" />
            <InfoCard imgSrc="/icons/clock.svg" title="Fast Turnaround" />
            <InfoCard imgSrc="/icons/graph.svg" title="Scalable Solutions" />
          </CardsWrapper>
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

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },

  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
}));

const HireContainer = style(Box)(({ theme }) => ({
  backgroundColor: "#34A6DE",
}));
