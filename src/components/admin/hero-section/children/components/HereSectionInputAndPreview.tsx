/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";

import { Button, Box, Typography } from "@mui/material";

import CloudUploadTwoToneIcon from "@mui/icons-material/CloudUploadTwoTone";
import CancelIcon from "@mui/icons-material/Cancel";
import { ImageStructure } from "@/services/hero";
import { getImageURL } from "@/utils/images";

interface HereSectionInputAndPreviewProps {
  selectedImageUrlBanner: ImageStructure;
  handleRemoveImage: () => void;
  handleFileSelect: (event: React.ChangeEvent<HTMLInputElement> | null) => void;
}

export function HereSectionInputAndPreview({
  selectedImageUrlBanner,
  handleRemoveImage,
  handleFileSelect,
}: HereSectionInputAndPreviewProps) {
  const imageUrl = selectedImageUrlBanner?.imageUrl || "";
  const base64 = selectedImageUrlBanner?.base64 || "";

  return (
    <>
      <Typography sx={{ my: 2 }} variant="h4">
        Hero Section{" "}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
        }}
      >
        {imageUrl || base64 ? (
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
              src={base64 || getImageURL(imageUrl)}
              alt="Image not foundd"
              style={{
                width: "140px",
                borderRadius: "16px",
                height: "140px",
              }}
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
              alignItems: "center",
              justifyContent: "flex-start",
              cursor: "pointer",
              width: 140,
              height: 140,
            }}
          >
            <Box
              style={{
                color: "#000",
                borderRadius: "50%",
                border: "none",
                boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
              }}
              sx={{
                position: "relative",
                height: "140px",
                width: "140p",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <input
                type="file"
                title="Add Hero Banner"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  cursor: "pointer",
                  opacity: 0,
                  zIndex: 1,
                }}
                onChange={handleFileSelect}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                <CloudUploadTwoToneIcon fontSize="large" />
                <Typography> Hero Banner</Typography>
              </Box>
            </Box>
          </div>
        )}
      </Box>
    </>
  );
}
