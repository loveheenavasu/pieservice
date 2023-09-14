"use client";
import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import ForthLogo from "./children/hero-section-logos/ForthLogo";
import IstLogo from "./children/hero-section-logos/IstLogo";
import SecondLogo from "./children/hero-section-logos/SecondLogo";
import ThirdLogo from "./children/hero-section-logos/ThirdLogo";

const LogosSection = ({selectedImages,handleFileSelectLogo, removeImageByIndex}:any) => {

  //

  return (
    <Box  sx={{mt:2}}>
    <Typography sx={{fontSize:"18px"}}>
      Upload Logos
    </Typography>
    <Box sx={{display:'flex', justifyContent:'center', width:'100%', gap:'20px'}}>
     <IstLogo
        selectedImageURLLogo={selectedImages[0]}
        handleFileSelectLogo={handleFileSelectLogo}
        handleRemoveImageLogo={removeImageByIndex}
      />
      <SecondLogo
        selectedImageURLLogo={selectedImages[1]}
        handleFileSelectLogo={handleFileSelectLogo}
        handleRemoveImageLogo={removeImageByIndex}

      />
      <ThirdLogo
        selectedImageURLLogo={selectedImages[2]}
        handleFileSelectLogo={handleFileSelectLogo}
        handleRemoveImageLogo={removeImageByIndex}

      />
      <ForthLogo
        selectedImageURLLogo={selectedImages[3]}
        handleFileSelectLogo={handleFileSelectLogo}
        handleRemoveImageLogo={removeImageByIndex}

      />
    </Box>

    </Box>
    
  );
};

export default LogosSection;
