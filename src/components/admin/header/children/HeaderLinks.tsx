/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import {
  TextField,
  Box,
  FormControl,
  Button,
  Typography,
  Paper,
} from "@mui/material";

import FileUploadIcon from "@mui/icons-material/FileUpload";
import ControlPointDuplicateRoundedIcon from "@mui/icons-material/ControlPointDuplicateRounded";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import UploadLogo from "./UploadLogo";
import { addHeader, getHeader } from "@/services/header";
import DeleteIcon from "@mui/icons-material/Delete";
import { fileToBase64URL, getFileExtension, getImageURL } from "@/utils/images";

interface FormDataType {
  name: string;
  link: string;
  icon?: string;
  extension?: string;
  base64?: string;
}

interface HeaderImageProps {
  headerLogo?: string;
  extension?: string;
  headerIconBase64?: string;
}

const HeaderLinks = () => {
  const [formDataArray, setFormDataArray] = React.useState<FormDataType[]>([
    {
      name: "",
      link: "",
      icon: "",
      extension: "",
    },
  ]);

  const [selectedImageURLLogo, setSelectedImageURLLogo] =
    useState<HeaderImageProps>({
      headerLogo: "",
      extension: "",
      headerIconBase64: "",
    });

  useEffect(() => {
    getHeader().then((res) => {
      setFormDataArray(res?.data?.data);
      setSelectedImageURLLogo({
        headerLogo: res?.data?.headerLogo || "",
        extension: "",
      });
    });
  }, []);

  const handleFileSelectLogo = async (
    event: React.ChangeEvent<HTMLInputElement> | null
  ) => {
    const file = event?.target?.files?.[0] || null;

    if (file) {
      const extension = getFileExtension(file);

      const base64 = await fileToBase64URL(file);

      if (typeof base64 === "string") {
        setSelectedImageURLLogo({
          headerLogo: "",
          extension,
          headerIconBase64: base64,
        });
      }
    }
  };

  const handleFileSelect = async (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const file = event.target.files?.[0] || null;

    if (file) {
      const base64 = await fileToBase64URL(file);
      if (typeof base64 === "string") {
        const extension = getFileExtension(file);

        setFormDataArray((prevDataArray) => {
          const newDataArray = [...prevDataArray];
          newDataArray[index] = {
            ...newDataArray[index],
            extension: extension,
            icon: "",
            base64: base64,
          };
          return newDataArray;
        });
      }
    }
  };

  const handleHeaderLinkChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const { name, value } = event.target;
    setFormDataArray((prevDataArray) => {
      const newDataArray = [...prevDataArray];
      newDataArray[index] = {
        ...newDataArray[index],
        [name]: value,
      };
      return newDataArray;
    });
  };

  const handleRemoveImage = (indexToRemove: number) => {
    setFormDataArray((prevDataArray) => {
      const newDataArray = [...prevDataArray];
      const updatedObject = { ...newDataArray[indexToRemove] };
      delete updatedObject.icon;
      newDataArray[indexToRemove] = updatedObject;

      return newDataArray;
    });
  };

  // Handle submit
  const handleSubmit = async () => {
    await addHeader({
      links: formDataArray,
      headerIcon: selectedImageURLLogo.headerLogo,
      extension: selectedImageURLLogo.extension,
      headerIconBase64: selectedImageURLLogo.headerIconBase64,
    });
  };

  const handleAddFields = () => {
    const newField = {
      name: "",
      link: "",
      icon: "",
      extension: "",
    };
    let data = [...(formDataArray || []), newField];
    setFormDataArray(data);
  };

  const handleRemoveImageLogo = () => {
    setSelectedImageURLLogo({
      headerLogo: "",
      extension: "",
      headerIconBase64: "",
    });
  };

  const handleDelete = (index: number) => {
    const data = formDataArray?.filter((_, i) => i !== index);
    setFormDataArray(data);
  };

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "end", mx: 1 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{ mt: 2, padding: "5px 30px" }}
        >
          Save
        </Button>
      </Box>
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          mt: 2,
        }}
      >
        <UploadLogo
          selectedImageURLLogo={
            selectedImageURLLogo.headerIconBase64 ||
            selectedImageURLLogo.headerLogo
          }
          handleFileSelectLogo={handleFileSelectLogo}
          handleRemoveImageLogo={handleRemoveImageLogo}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "0px 56px 0 0px",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Header Links
          </Typography>
          <Button variant="text" onClick={() => handleAddFields()}>
            <ControlPointDuplicateRoundedIcon fontSize="large" />
          </Button>
        </Box>

        {formDataArray?.map((formData, index) => {
          return (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "cente",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <FormControl variant="outlined" sx={{ my: 2, width: "45%" }}>
                  <TextField
                    sx={{ width: "95%" }}
                    label={"Header Text"}
                    variant="outlined"
                    value={formData.name}
                    onChange={(event) => handleHeaderLinkChange(event, index)}
                    name="name"
                    size="small"
                  />
                </FormControl>
                <FormControl variant="outlined" sx={{ my: 1, width: "45%" }}>
                  <TextField
                    sx={{ width: "95%" }}
                    label={"Header Link"}
                    variant="outlined"
                    value={formData.link}
                    onChange={(event) => handleHeaderLinkChange(event, index)}
                    name="link"
                    size="small"
                  />
                </FormControl>
                {/* Assuming you have an array of form data objects */}
                <FormControl
                  key={index}
                  variant="outlined"
                  sx={{ my: 0, width: "10%" }}
                >
                  {!formData?.icon && !formData?.base64 ? (
                    <>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          cursor: "pointer",
                          margin: "20px 0px 30px 0",
                        }}
                      >
                        <Button
                          style={{
                            color: "#000",
                            border: "none",
                            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                          }}
                          variant="outlined"
                        >
                          icon
                          <FileUploadIcon />
                        </Button>
                      </div>

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
                        }}
                        onChange={(event) => handleFileSelect(event, index)}
                      />
                    </>
                  ) : (
                    <div
                      style={{
                        position: "relative",
                        display: "inline-block",
                      }}
                    >
                      <img
                        src={
                          formData?.base64 || getImageURL(formData?.icon || "")
                        }
                        alt="Selected Image"
                        style={{ maxWidth: "60px", maxHeight: "60px" }}
                      />
                      <Button
                        style={{
                          position: "absolute",
                          top: "-13px",
                          right: "69px",
                        }}
                        size="small"
                        variant="text"
                        onClick={() => handleRemoveImage(index)}
                      >
                        <CancelRoundedIcon fontSize="small" />
                      </Button>
                    </div>
                  )}
                </FormControl>
              </Box>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => {
                  handleDelete(index);
                }}
              >
                <DeleteIcon />
              </div>
            </Box>
          );
        })}
      </Paper>
    </>
  );
};

export default HeaderLinks;
