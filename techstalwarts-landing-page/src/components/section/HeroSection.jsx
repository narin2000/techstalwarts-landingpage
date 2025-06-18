import React from "react";
import Box from "../miuComponents/Box";
import style from "../common/styled";
import Typography from "../miuComponents/Typography";
import LayoutWrapper from "../common/Layout";
import Button from "../common/Button";
import { Divider } from "@mui/material";
import Grid from "../miuComponents/Grid";
import Entrepreneurlogo from "../../assets/Entrepreneurlogo.svg";
import techcrunchlogo from "../../assets/techcrunchlogo.png";
import advisorlogo from "../../assets/advisorlogo.svg";
import Forbeslogo from "../../assets/Forbeslogo.png";

const HeroSection = () => {
  const logos = [
    { src: Entrepreneurlogo, alt: "Entrepreneur Logo" },
    { src: advisorlogo, alt: "advisorlogo Logo" },
    { src: Forbeslogo, alt: "Forbeslogo Logo" },
    { src: techcrunchlogo, alt: "techcrunchlogo Logo" },
  ];

  return (
    <Box>
      {/* Navigation */}
      <LayoutWrapper>
        <NavBox>
          <Box>
            <img
              src="src/assets/TSlogo.png"
              alt="TechStalwarts Logo"
              height={"30px"}
              width={"150px"}
            />
          </Box>
          <Box display="flex" gap="25px" alignItems="center">
            <NavText>Learn More</NavText>
            <NavButton>Contact Us</NavButton>
          </Box>
        </NavBox>
      </LayoutWrapper>

      {/* Hero Section */}
      <SectionContainer>
        <LayoutWrapper>
          <SectionText>
            Dedicated Development Teams <br /> To Help Your Business Grow
          </SectionText>
          <DescriptionText>
            We Provide dedicated and experienced developers to help startups and
            fast-growing <br /> tech companies build successful, scalable
            products that users love
          </DescriptionText>
          <NavButton sx={{ padding: "10px 60px", fontSize: "18px" }}>
            Hire Developers
          </NavButton>
        </LayoutWrapper>

        <Divider sx={{ paddingTop: "140px" }} />

        {/* Footer Logos */}
        <FooterBox>
          <FooterText>Our Clients Applications Were Featured In:</FooterText>
          <Grid container spacing={4} justifyContent="center">
            {logos.map((logo, index) => (
              <Grid item key={index} xs={6} sm={4} md={3}>
                <FooterImage src={logo.src} alt={logo.alt} />
              </Grid>
            ))}
          </Grid>
        </FooterBox>
      </SectionContainer>
    </Box>
  );
};

export default HeroSection;



const SectionContainer = style(Box)(() => ({
  backgroundImage: `url("src/assets/sectionherobg.svg")`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  width: "100%",
  paddingTop: "100px",
  overflow: "hidden",
}));

const NavBox = style(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "5px 0",
  backgroundColor: "#ffffff",
  width: "100%",
}));

const NavText = style(Typography)(() => ({
  fontSize: "18px",
  fontWeight: "bold",
  color: "#1E3864",
}));

const NavButton = style(Button)(() => ({
  backgroundImage: "linear-gradient(90deg, #4BB5E9 0%, #4BB5E9 100%)",
  backgroundColor: "transparent",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "0% 0%",
  backgroundSize: "cover",
  padding: "5px 25px",
  fontSize: "16px",
  fontWeight: 600,
  color: "#fff",
  border: "none",
  borderRadius: "0px",
}));

const SectionText = style(Typography)(() => ({
  fontSize: "51px",
  fontWeight: "bold",
  color: "#ffffff",
  marginBottom: "20px",
  
}));

const DescriptionText = style(Typography)(() => ({
  fontSize: "17px",
  fontWeight: "400",
  color: "#ffffff",
  marginBottom: "20px",
}));

const FooterBox = style(Box)(() => ({
 
  padding: "30px 20px",
  textAlign: "center",
  "@media (min-width: 960px)": {
    display: "flex",
    gap: "80px",
    padding: "30px 80px",
    textAlign: "center",
  },
}));

const FooterText = style(Typography)(() => ({
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "500",
  marginBottom: { xs: "20px", md: "20px" },
}));

const FooterImage = style("img")(() => ({
  width: "100%",
  maxWidth: "130px",
 alignItems:"center",
  margin: "0 auto",
}));
