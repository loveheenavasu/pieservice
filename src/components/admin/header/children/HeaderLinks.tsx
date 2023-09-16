"use client";
import React, { useEffect, useState } from "react";
import {
  TextField,
  Box,
  FormControl,
  Button,
  Select,
  MenuItem,
  Typography,
  Paper,
} from "@mui/material";

import FileUploadIcon from "@mui/icons-material/FileUpload";
import ControlPointDuplicateRoundedIcon from "@mui/icons-material/ControlPointDuplicateRounded";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import UploadLogo from "./UploadLogo";
import { addHeader, getHeader } from "@/services/header";

const HeaderLinks = () => {
  const [selectedImageURLs, setSelectedImageURLs] = React.useState<
    Array<string>
  >([]);

  const [headerData, setHeaderData] = useState(null);

  const [formDataArray, setFormDataArray] = React.useState([
    {
      name: "",
      link: "",
      icon: "",
      extension: "",
    },
  ]);
  console.log(formDataArray, "formDadddtadArray");
  const [base64Image, setBase64Image] = useState("");
  const [logoExtension, setLogoExtension] = useState<string | null>(null);

  const [selectedImageURLLogo, setSelectedImageURLLogo] = useState({
    imageURL: "",
    extension: "",
  });

  useEffect(() => {
    getHeader().then((res) => {
      setHeaderData(res?.data);
      setFormDataArray(res?.data?.data);
      setSelectedImageURLLogo({
        imageURL: res?.data?.headerLogo || "",
      });
    });
  }, []);
  console.log(formDataArray, "formdataarray");

  console.log(headerData, "headerdata");
  console.log(selectedImageURLLogo, "hghg");

  const handleFileSelectLogo = (
    event: React.ChangeEvent<HTMLInputElement> | null
  ) => {
    const file = event?.target?.files?.[0] || null;

    if (file) {
      const extension = file.name.split(".").pop() || "";

      const reader = new FileReader();
      reader.onload = (e) => {
        const base64DataUrl = e?.target?.result as string;

        setSelectedImageURLLogo({
          imageURL: base64DataUrl,
          extension,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileSelect = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const file = event.target.files?.[0] || null;

    if (file) {
      const imageURL = URL.createObjectURL(file);
      const extension = file.name.split(".").pop();

      // Read the file as a base64 data URL
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64DataUrl = e?.target?.result as string;

        setSelectedImageURLs((prevURLs) => {
          const newURLs = [...prevURLs];
          newURLs[index] = imageURL;
          return newURLs;
        });

        setFormDataArray((prevDataArray) => {
          const newDataArray = [...prevDataArray];
          newDataArray[index] = {
            ...newDataArray[index],
            extension: extension!,
            icon: base64DataUrl,
          };
          return newDataArray;
        });
      };

      reader.readAsDataURL(file);
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
  // const handleRemoveImage = (indexToRemove: number) => {
  //   setFormDataArray((prevDataArray) => {
  //     // Create a copy of the previous data array without the item to remove
  //     const newDataArray = prevDataArray.filter((_, index) => index !== indexToRemove);
  //     return newDataArray;
  //   });
  // };

  const handleRemoveImage = (indexToRemove: number) => {
    setFormDataArray((prevDataArray) => {
      // Create a copy of the previous data array
      const newDataArray = [...prevDataArray];

      // Create a copy of the object at the specified index
      const updatedObject = { ...newDataArray[indexToRemove] };

      // Remove the 'icon' property from the object
      delete updatedObject.icon;

      // Update the newDataArray with the modified object
      newDataArray[indexToRemove] = updatedObject;

      return newDataArray;
    });
  };

  // Handle submit
  const handleSubmit = async () => {
    // Handle uploading file and saving data here
    console.log("Header Link 1:", selectedImageURLLogo, formDataArray);
    await addHeader({
      links: formDataArray,
      headerIcon: selectedImageURLLogo.imageURL,
      extension: selectedImageURLLogo.extension,
    });
  };
  console.log(selectedImageURLLogo, "selectedImageURLLogo");
  const handleAddFields = () => {
    const newField = {
      name: "",
      link: "",
      icon: "",
      extension: "",
    };
    let data = [...formDataArray, newField];
    setFormDataArray(data);
  };
  console.log(formDataArray, "fossrmDataArray");
  const handleRemoveImageLogo = () => {
    setSelectedImageURLLogo({
      imageURL: "",
      extension: "",
    });
    setBase64Image("");
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
        {console.log(
          selectedImageURLLogo.imageURL,
          "selectedImageURLLogo.imageURL"
        )}
        <UploadLogo
          selectedImageURLLogo={selectedImageURLLogo.imageURL}
          handleFileSelectLogo={handleFileSelectLogo}
          // base64Image={base64Image}
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
                  sx={{ my: 0, width: "15%" }}
                >
                  {!formData?.icon ? (
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
                        src={`https://piemultilingualbackend.onrender.com/${formData?.icon}`}
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
            </Box>
          );
        })}
      </Paper>
    </>
  );
};

export default HeaderLinks;
