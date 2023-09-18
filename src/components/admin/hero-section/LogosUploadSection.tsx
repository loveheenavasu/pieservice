"use client";
import { Box, Typography } from "@mui/material";
import React from "react";
import { LogoInputAndPreview } from "./children/components/LogoInputAndPreview";
import { ImageStructure } from "@/services/hero";
import { AddLogo } from "./children/components/AddLogo";
import { fileToBase64URL, getFileExtension } from "@/utils/images";

type InputEvent = React.ChangeEvent<HTMLInputElement>;

interface LogosUploadSectionProps {
  selectedImages: ImageStructure[];
  setSelectedImages: React.Dispatch<React.SetStateAction<ImageStructure[]>>;
  removeImageByIndex: (event: number) => void;
}

export const LogosUploadSection = ({
  selectedImages,
  setSelectedImages,
  removeImageByIndex,
}: LogosUploadSectionProps) => {
  const handleFileSelectLogo = async (event: InputEvent, index: number) => {
    const file = event?.target?.files?.[0] ?? null;

    if (file) {
      const base64 = await fileToBase64URL(file);
      const extension = getFileExtension(file);

      if (typeof base64 === "string") {
        setSelectedImages((prevDataArray) => {
          const newDataArray = [...prevDataArray];
          newDataArray[index] = {
            base64: base64,
            imageUrl: "",
            extension,
          };

          return newDataArray;
        });
      }
    }
  };

  const handleAdd = async (e: InputEvent) => {
    const file = e?.target?.files?.[0] ?? null;

    if (file) {
      const base64 = await fileToBase64URL(file);
      const extension = getFileExtension(file);
      if (typeof base64 === "string") {
        setSelectedImages((prev) => [...(prev || []), { base64, extension }]);
      }
    }
  };
  return (
    <Box sx={{ mt: 2 }}>
      <Typography sx={{ fontSize: "18px", mb: "1rem" }}>
        Trusted Client Logos
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "start",
          width: "100%",
          gap: "20px",
        }}
      >
        {selectedImages?.map((logo, index) => (
          <LogoInputAndPreview
            index={index}
            key={logo?.base64 ?? logo?.imageUrl}
            selectedImageURLLogo={logo?.base64 ?? logo?.imageUrl}
            handleFileSelectLogo={handleFileSelectLogo}
            handleRemoveImageLogo={removeImageByIndex}
          />
        ))}
        <AddLogo addLogo={handleAdd} disabled={selectedImages?.length >= 4} />
      </Box>
    </Box>
  );
};
