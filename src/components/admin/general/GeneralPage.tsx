"use client";
import * as React from "react";
import { createTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Switch, { SwitchProps } from "@mui/material/Switch";
import Layout from "../layout/Layout";
import { Box, FormControlLabel } from "@mui/material";
import { toggleSearch } from "@/services/settings";
const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

const GeneralPage = () => {
  const [isIOSStyle, setIsIOSStyle] = React.useState(false);

  const handleChange = () => {
    // Toggle the state of isIOSStyle
    const prev = isIOSStyle
    setIsIOSStyle(!prev);
    toggleSearch(!prev)
  };

  console.log(isIOSStyle, "isIOSStyle");

  return (
    <>
      <Layout>
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={12}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  mt: 10,
                }}
              >
                <Typography sx={{ my: 2 }} variant="h4">
                  General
                </Typography>
                <Box>
                    <Typography variant="h5" sx={{fontSize:'18px'}}> Enable Search</Typography>
                <FormControlLabel
                  control={<IOSSwitch sx={{ m: 1 , mt:2}} onChange={handleChange} />}
                  label=""
                />
                </Box>
                
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Layout>
    </>
  );
};

export default GeneralPage;
