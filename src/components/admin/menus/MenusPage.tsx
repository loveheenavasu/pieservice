"use client";
import React, { useEffect, useState } from "react";
import {
  TextField,
  Box,
  FormControl,
  Button,
  Typography,
  Container,
  Grid,
  Paper,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import ControlPointDuplicateRoundedIcon from "@mui/icons-material/ControlPointDuplicateRounded";

import Layout from "../layout/Layout";
import { addMenus, getMenus } from "@/services/menus";
import CircularProgress from "@mui/material/CircularProgress";

const MenusPage = () => {
  const [selectedImageURLs, setSelectedImageURLs] = React.useState<
    Array<string>
  >([]);
  const [menusData, setMenusData] = useState(null);
  const [loading, setLoading] = useState(false);
  console.log(loading, "loading");
  const [formDataArray, setFormDataArray] = React.useState([
    {
      name: "",
      link: "",
    },
  ]);
  console.log(formDataArray, "formDataArraysadfsadf");
  console.log(formDataArray, "formDataArray");
  const handlelinkChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const { name, value } = event.target;
    console.log(formDataArray, "lsafoweur");
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
    addMenus(formDataArray, setLoading);
  };
  console.log(formDataArray, "formDataArray");

  const handleAddFields = () => {
    const newField = {
      name: "",
      link: "",
    };
    const updatedData = [...formDataArray, newField];

    setFormDataArray(updatedData);
  };

  useEffect(() => {
    getMenus().then((res) => {
      console.log(res, "jfaslfjsajf");
      setMenusData(res?.data);
      console.log(res?.data, "lasdfjasljf");
      setFormDataArray(res?.data);
    });
  }, []);
  const handleDelete = (index: number) => {
    console.log(index, "sadfahsfsdfdsljf");
    const data = formDataArray?.filter((_, i) => i !== index);
    setFormDataArray(data);
  };

  return (
    <>
      <Layout>
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={12}>
              <Box
                sx={{ display: "flex", justifyContent: "end", mx: 0, mt: 7 }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                  disabled={loading}
                  sx={{ mt: 2, padding: "5px 30px" }}
                >
                  {loading ? <CircularProgress /> : "Save"}
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

                {formDataArray?.map((formData, index) => (
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
                          onChange={(event) => handlelinkChange(event, index)}
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
                          onChange={(event) => handlelinkChange(event, index)}
                          name="link"
                          size="small"
                        />
                      </FormControl>
                    </Box>
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={(e) => {
                        handleDelete(index);
                      }}
                    >
                      <DeleteIcon />
                    </div>
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
