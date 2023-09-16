"use client";
import { Button, Box, Typography } from "@mui/material";
import React from "react";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import CloudUploadRoundedIcon from "@mui/icons-material/CloudUploadRounded";
import CloudUploadTwoToneIcon from "@mui/icons-material/CloudUploadTwoTone";
import CancelIcon from "@mui/icons-material/Cancel";

const UploadLogo = ({
  selectedImageURLLogo,
  handleFileSelectLogo,
  handleRemoveImageLogo,
}: any) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}
    >
      {selectedImageURLLogo ? (
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
            src={`https://piemultilingualbackend.onrender.com/1694770802618_0.6751337728686013.png`}
            alt="Selected Image"
            style={{ maxWidth: "200px", maxHeight: "200px" }}
          />
          <Button
            variant="text"
            onClick={handleRemoveImageLogo}
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
              padding: "48px 60px",
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
              <Typography>Logo</Typography>
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
        onChange={(event) => handleFileSelectLogo(event)}
      />
    </Box>
  );
};

export default UploadLogo;
