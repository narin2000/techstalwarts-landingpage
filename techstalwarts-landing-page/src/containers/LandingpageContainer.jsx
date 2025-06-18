import React from "react";
import { Box } from "@mui/material";
import HeroSection from "../components/section/HeroSection";
import Technologies from "../components/section/Technologies";
import SuccessStories from "../components/section/successStories";

// image
import DynamoDB from "../assets/DynamoDB.png";
import Firebase from "../assets/Firebase.png";
import postgresql from "../assets/postgresql.png";
import MongoDB from "../assets/MongoDB.png";
import sqlServer from "../assets/sqlServer.png";
import mysql from "../assets/mysql.png";
import react from "../assets/react.png";
import flutter from "../assets/flutter.png";
import kotlin from "../assets/kotlin.png";
import Android from "../assets/Android.png";
import ios from "../assets/ios.png";
import Ionic from "../assets/Ionic.png";

import DataSecurity from "../assets/DataSecurity.png";
import deliverytime from "../assets/deliverytime.png";
import ExpertDeveloper from "../assets/ExpertDeveloper.png";
import syncsettings from "../assets/syncsettings.png";
const LandingpageContainer = () => {
  const techSlides = [
    {
      description: (
        <>
          Our data architects choose the right{" "}
          <span style={{ fontWeight: "bold", color: "#1E3864" }}>
            Database technology
          </span>{" "}
          - storage engine and processing engine for your product.
        </>
      ),
      items: [
        { src: DynamoDB, label: "DynamoDB" },
        { src: Firebase, label: "Firebase" },
        { src: postgresql, label: "postgresql" },
        { src: MongoDB, label: "MongoDB" },
        { src: sqlServer, label: "SQL Server" },
        { src: mysql, label: "MySQL" },
      ],
    },
    {
      description: (
        <>
          "We design and develop{" "}
          <span style={{ fontWeight: "bold", color: "#1E3864" }}>
            mobile app
          </span>
          with latest mobile app development technologies",
        </>
      ),
      items: [
        { src: react, label: "React" },
        { src: flutter, label: "flutter" },
        { src: kotlin, label: "kotlin" },
        { src: Android, label: "Android" },
        { src: ios, label: "Ios" },
        { src: Ionic, label: "Ionic" },
      ],
    },
  ];
  const hiringCard = [
    {
      src: ExpertDeveloper,
      label: "Expert Developers",
      title:
        "TechStalwarts developers have more than 8 years of experience working with clients across the globe.",
    },
    {
      src: DataSecurity,
      label: "Data Security",
      title:
        "Our expertise has made us capable of delivering projects on-time without any discrepancies or flaws.",
    },

    {
      src: deliverytime,
      label: "On-time Delivery",
      title:
        "We understand the privacy of your project and we make sure we maintained that.",
    },
    {
      src: syncsettings,

      label: "Agile Process",
      title:
        "We follow an agile approach to develop products and streamline all the development processes.",
    },
  ];

  const features = [
  {
    id: "01",
    title: "Dedicated Teams",
    description:
      "Dedicated development teams will work exclusively on your project.",
  },
  {
    id: "02",
    title: "Project Model",
    description:
      "You get a fixed price and you don't pay more than that.",
  },
  {
    id: "03",
    title: "Hourly Model",
    description:
      "Hire a dedicated developer on an hourly basis for your specific project needs.",
  },
];


  return (
    <>
      <HeroSection />
      <Technologies techSlides={techSlides} hiringCard={hiringCard} />
      <SuccessStories features={features}/>
    </>
  );
};

export default LandingpageContainer;
