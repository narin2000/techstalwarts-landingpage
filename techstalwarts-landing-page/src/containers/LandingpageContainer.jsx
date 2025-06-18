import React from "react";
import { Box } from "@mui/material";
import HeroSection from "../components/section/HeroSection";
import Technologies from "../components/section/Technologies";

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
        <span style={{ fontWeight: "bold", color: "#1E3864" }}>mobile app</span>
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


  return (
    <>
      <HeroSection />
      <Technologies techSlides={techSlides}/>
    </>
  );
};

export default LandingpageContainer;
