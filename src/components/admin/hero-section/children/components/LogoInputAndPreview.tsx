/* eslint-disable @next/next/no-img-element */
"use client";
import { Button, Box, Typography } from "@mui/material";
import React from "react";

import CancelIcon from "@mui/icons-material/Cancel";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import { getImageURL } from "@/utils/images";

interface LogoInputAndPreviewProps {
  selectedImageURLLogo?: string;
  handleFileSelectLogo: (
    ev: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
  handleRemoveImageLogo: (index: number) => void;
  index: number;
}

export function LogoInputAndPreview({
  selectedImageURLLogo,
  handleFileSelectLogo,
  handleRemoveImageLogo,
  index,
}: LogoInputAndPreviewProps) {
  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    handleFileSelectLogo(ev, index);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        zIndex: 0,
      }}
    >
      {selectedImageURLLogo ? (
        <Box
          sx={{
            display: "flex",
            position: "relative",
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={getImageURL(selectedImageURLLogo)}
            alt="Selected Image"
            style={{
              width: "120px",
              borderRadius: "16px",
              height: "120px",
            }}
          />
          <Button
            variant="text"
            onClick={() => handleRemoveImageLogo(index)} // Pass the index to the remove function
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
              borderRadius: "3%",
              boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
              border: "1px dashed black",
              height: "100px",
              width: " 110px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
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
              <LibraryAddIcon fontSize="small" />
              <Typography>First logo</Typography>
            </Box>
          </Box>
        </div>
      )}

      <input
        type="file"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          cursor: "pointer",
          opacity: 0,
          zIndex: 1111,
        }}
        onChange={handleChange}
      />
    </Box>
  );
}
