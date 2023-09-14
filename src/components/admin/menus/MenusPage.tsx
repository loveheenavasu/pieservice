"use client";
import React from "react";
import {
  TextField,
  Box,
  FormControl,
  Button,
  Select,
  MenuItem,
  Typography,
  Container,
  Grid,
  Paper,
} from "@mui/material";

import FileUploadIcon from "@mui/icons-material/FileUpload";
import ControlPointDuplicateRoundedIcon from "@mui/icons-material/ControlPointDuplicateRounded";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import Layout from "../layout/Layout";
import { addMenus } from "@/services/menus";

const MenusPage = () => {
  const [selectedImageURLs, setSelectedImageURLs] = React.useState<
    Array<string>
  >([]);

  const [formDataArray, setFormDataArray] = React.useState([
    {
      name: "",
      link: "",
    },
  ]);

  const handlelinkChange = (
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
    setSelectedImageURLs((prevURLs) => {
      const newURLs = [...prevURLs];
      newURLs[indexToRemove] = "";
      return newURLs;
    });
  };

  const handleSubmit = () => {
    addMenus({menus: formDataArray})
  };

  const handleAddFields = () => {
    setFormDataArray((prevDataArray): any => {
      // Create a new object for the new field
      const newField = {
        name: "",
        link: "",
      };

      // Add the new field to the end of the array
      const newDataArray = [...prevDataArray, newField];
      return newDataArray;
    });
  };

  return (
    <>
      <Layout>
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={12}>
              <Box sx={{ display: "flex", justifyContent: "end", mx: 0, mt:7 }}>
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
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    margin: "0px 12px 0 0px",
                  }}
                >
                  <Typography variant="h6" gutterBottom>
                    Header Links
                  </Typography>
                  <Button variant="text" onClick={() => handleAddFields()}>
                    <ControlPointDuplicateRoundedIcon fontSize="large" />
                  </Button>
                </Box>
                {formDataArray.map((formData, index) => (
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
                      <FormControl
                        variant="outlined"
                        sx={{ my: 2, width: "48%" }}
                      >
                        <TextField
                          sx={{ width: "95%" }}
                          label={"Menu Name"}
                          variant="outlined"
                          value={formData.name}
                          onChange={(event) =>
                            handlelinkChange(event, index)
                          }
                          name="name"
                          size="small"
                        />
                      </FormControl>
                      <FormControl
                        variant="outlined"
                        sx={{ my: 1, width: "48%" }}
                      >
                        <TextField
                          sx={{ width: "95%" }}
                          label={"Menu Link"}
                          variant="outlined"
                          value={formData.link}
                          onChange={(event) =>
                            handlelinkChange(event, index)
                          }
                          name="link"
                          size="small"
                        />
                      </FormControl>
                    </Box>
                  </Box>
                ))}
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Layout>
    </>
  );
};

export default MenusPage;
