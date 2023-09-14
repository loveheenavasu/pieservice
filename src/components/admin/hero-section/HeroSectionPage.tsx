"use client";
import React, { useState } from "react";
import Layout from "../layout/Layout";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Button, Box, Typography } from "@mui/material";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import CloudUploadTwoToneIcon from "@mui/icons-material/CloudUploadTwoTone";
import CancelIcon from "@mui/icons-material/Cancel";
import LogosSection from "./LogosSection";
import { addHeader } from "@/services/header";
import { addHero } from "@/services/hero";

const HeroSectionPage = () => {
  const [selectedImageUrlBanner, setSelectedImageUrlBanner] = useState({
    imageUrl: "",
    extension: "",
  });

  const handleFileSelect = (
    event: React.ChangeEvent<HTMLInputElement> | null
  ) => {
    const file = event?.target?.files?.[0] || null;

    if (file) {
      const extension = file.name.split(".").pop() || "";

      const reader = new FileReader();
      reader.onload = (e) => {
        const base64DataUrl = e?.target?.result as string;

        setSelectedImageUrlBanner({
          imageUrl: base64DataUrl,
          extension,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImageUrlBanner({
      imageUrl: "",
      extension: "",
    });
  };

  const [selectedImages, setSelectedImages] = useState([
    { imageUrl: "", extension: "" },
    { imageUrl: "", extension: "" },
    { imageUrl: "", extension: "" },
    { imageUrl: "", extension: "" },
  ]);

  const handleFileSelectLogo = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const file = event.target.files?.[0] || null;

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      const extension = file.name.split(".").pop() || "";

      // Read the file as a base64 data URL
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64DataUrl = e?.target?.result as string;

        setSelectedImages((prevDataArray) => {
          const newDataArray = [...prevDataArray];
          newDataArray[index] = {
            ...newDataArray[index],
            imageUrl: base64DataUrl,
            extension: extension,
          };
          return newDataArray;
        });
      };

      reader.readAsDataURL(file);
    }
  };

  const removeImageByIndex = (indexToRemove: number) => {
    setSelectedImages((prevSelectedImages) => {
      const updatedSelectedImages = prevSelectedImages.filter(
        (_, index) => index !== indexToRemove
      );

      return updatedSelectedImages;
    });
  };

  const handleSave = async () => {
    await addHero({
      data: selectedImages,
      heroSection: selectedImageUrlBanner
    })
  };

  return (
    <Layout>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8} lg={12}>
            <Box
              sx={{
                justifyContent: "flex-end",
                display: "flex",
                alignItems: "center",
                width: "100%",
                my: 2,
                mt: 7,
              }}
            >
              <Button onClick={handleSave} variant="contained">
                Save
              </Button>
            </Box>
            <Paper
              sx={{
                p: 2,
                pb: 5,
                display: "flex",
                flexDirection: "column",
                mt: 0,
              }}
            >
              <Typography sx={{ my: 2 }} variant="h4">
                Hero Section
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                {selectedImageUrlBanner.imageUrl ? (
                  <Box
                    sx={{
                      display: "flex",
                      position: "relative",
                      boxShadow: " rgba(0, 0, 0, 0.1) 0px 4px 12px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={selectedImageUrlBanner.imageUrl}
                      alt="Selected Image"
                      style={{ maxWidth: "200px", maxHeight: "200px" }}
                    />
                    <Button
                      variant="text"
                      onClick={handleRemoveImage}
                      size="small"
                      sx={{
                        position: "absolute",
                        color: "gray",
                        top: "-25px",
                        right: "-31px",
                        marginTop: "10px",
                        zIndex: 9999999,
                      }}
                    >
                      <CancelIcon />
                    </Button>
                  </Box>
                ) : (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      cursor: "pointer",
                      margin: "10px 0px 0px 0",
                    }}
                  >
                    <Box
                      style={{
                        color: "#000",
                        borderRadius: "50%",
                        padding: "55px 40px",
                        border: "none",
                        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <CloudUploadTwoToneIcon fontSize="large" />
                        <Typography> Hero Banner</Typography>
                      </Box>
                    </Box>
                  </div>
                )}

                <input
                  type="file"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "20%",
                    width: "50%",
                    height: "50%",
                    cursor: "pointer",
                    opacity: 0,
                    zIndex: 1,
                  }}
                  onChange={(event) => handleFileSelect(event)}
                />
              </Box>

              <LogosSection
                handleFileSelectLogo={handleFileSelectLogo}
                selectedImages={selectedImages}
                removeImageByIndex={removeImageByIndex}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default HeroSectionPage;