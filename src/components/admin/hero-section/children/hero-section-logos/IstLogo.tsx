"use client";
import { Button, Box, Typography } from "@mui/material";
import React from "react";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import CloudUploadRoundedIcon from "@mui/icons-material/CloudUploadRounded";
import CloudUploadTwoToneIcon from "@mui/icons-material/CloudUploadTwoTone";
import CancelIcon from "@mui/icons-material/Cancel";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import { ImageOutlined } from "@mui/icons-material";

const IstLogo = ({
  selectedImageURLLogo,
  handleFileSelectLogo,
  handleRemoveImageLogo,
  setSelectedImages,
  index, // Add the index prop to determine which image to display
}: any) => {
  const isBase64Url = () => {
    const regex =
      /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
    let val = regex.test(selectedImageURLLogo);
    let imgurl = "";
    if (selectedImageURLLogo?.length > 500) {
      imgurl = selectedImageURLLogo;
    } else {
      imgurl = `https://piemultilingualbackend.onrender.com/${selectedImageURLLogo}`;
    }
    console.log(imgurl, "asfksaldjflsjd", val);
    return imgurl;
  };

  console.log(isBase64Url(selectedImageURLLogo), "0823402384");
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}
    >
      {selectedImageURLLogo ? ( // Use imageURL to check if an image is available
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
            src={isBase64Url(selectedImageURLLogo)}
            alt="Selected Image"
            style={{
              width: "120px",
              borderRadius: "50%",
              height: "120px",
            }}
          />
          <Button
            variant="text"
            onClick={() => handleRemoveImageLogo(0)} // Pass the index to the remove function
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
          left: "20%",
          width: "50%",
          height: "50%",
          cursor: "pointer",
          opacity: 0,
          zIndex: 1,
        }}
        onChange={(event) => handleFileSelectLogo(event, 0)}
      />
    </Box>
  );
};

export default IstLogo;
