/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Button, Box, Snackbar, Alert } from "@mui/material";

import { ImageStructure, addHero, getHero } from "@/services/hero";
import { LogosUploadSection } from "./LogosUploadSection";
import { HereSectionInputAndPreview } from "./children/components/HereSectionInputAndPreview";
import { getFileExtension } from "@/utils/images";
import { LoadingSkelton } from "./children/components/LoadingSkelton";

const HeroSectionPage = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  const [selectedImageUrlBanner, setSelectedImageUrlBanner] =
    useState<ImageStructure>({
      imageUrl: "",
      extension: "",
    });

  let base64DataUrl = "";

  const handleFileSelect = (
    event: React.ChangeEvent<HTMLInputElement> | null
  ) => {
    const file = event?.target?.files ?? null;

    if (file) {
      const reader = new FileReader();
      if (event?.target?.files?.[0]) {
        reader.readAsDataURL(event?.target?.files[0]);
        reader.onload = (e) => {
          base64DataUrl = e?.target?.result as string;

          const extension = getFileExtension(file?.[0]);

          setSelectedImageUrlBanner({
            base64: base64DataUrl ?? "",
            imageUrl: "",
            extension: extension,
          });
        };
      }
    }
  };

  const handleRemoveImage = () => {
    setSelectedImageUrlBanner({
      imageUrl: "",
      extension: "",
    });
  };

  const [selectedImages, setSelectedImages] = useState<ImageStructure[]>([]);

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
      heroSection: selectedImageUrlBanner,
    }).then(() => {
      setIsOpen(true);
    });
  };

  const handleClose = () => setIsOpen(false);

  useEffect(() => {
    setIsLoading(true);
    getHero()
      .then((res) => {
        const removeNulls = (arr: []) => arr?.filter((item) => item !== null);
        setSelectedImageUrlBanner(res?.data?.heroSection);
        setSelectedImages(removeNulls(res?.data?.data));
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <Layout>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={isOpen}
        autoHideDuration={4000}
        onClose={handleClose}
        key={"bottom" + "left"}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Successfuly Updated Logos & Banner ⚡⚡⚡
        </Alert>
      </Snackbar>
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
              {isLoading ? (
                <LoadingSkelton />
              ) : (
                <>
                  <HereSectionInputAndPreview
                    selectedImageUrlBanner={selectedImageUrlBanner}
                    handleFileSelect={handleFileSelect}
                    handleRemoveImage={handleRemoveImage}
                  />

                  <LogosUploadSection
                    selectedImages={selectedImages}
                    setSelectedImages={setSelectedImages}
                    removeImageByIndex={removeImageByIndex}
                  />
                </>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default HeroSectionPage;
