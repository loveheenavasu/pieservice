"use client";
import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import ForthLogo from "./children/hero-section-logos/ForthLogo";
import IstLogo from "./children/hero-section-logos/IstLogo";
import SecondLogo from "./children/hero-section-logos/SecondLogo";
import ThirdLogo from "./children/hero-section-logos/ThirdLogo";

const LogosSection = ({
  selectedImages,
  handleFileSelectLogo,
  removeImageByIndex,
  heroData,
  setSelectedImages,
}: any) => {
  //

  return (
    <Box sx={{ mt: 2 }}>
      <Typography sx={{ fontSize: "18px" }}>Trusted Client Logos</Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "start",
          width: "100%",
          gap: "20px",
        }}
      >
        {console.log(
          selectedImages?.[0]?.imageUrl,
          "selectedImages?.[0]?.imageUrl"
        )}
        <IstLogo
          selectedImageURLLogo={selectedImages?.[0]?.imageUrl}
          handleFileSelectLogo={handleFileSelectLogo}
          handleRemoveImageLogo={removeImageByIndex}
          setSelectedImages={setSelectedImages}
        />
        <SecondLogo
          selectedImageURLLogo={selectedImages?.[1]?.imageUrl}
          handleFileSelectLogo={handleFileSelectLogo}
          handleRemoveImageLogo={removeImageByIndex}
          setSelectedImages={setSelectedImages}
        />
        <ThirdLogo
          selectedImageURLLogo={selectedImages?.[2]?.imageUrl}
          handleFileSelectLogo={handleFileSelectLogo}
          handleRemoveImageLogo={removeImageByIndex}
          setSelectedImages={setSelectedImages}
        />
        <ForthLogo
          selectedImageURLLogo={selectedImages?.[3]?.imageUrl}
          handleFileSelectLogo={handleFileSelectLogo}
          handleRemoveImageLogo={removeImageByIndex}
          setSelectedImages={setSelectedImages}
        />
      </Box>
    </Box>
  );
};

export default LogosSection;
