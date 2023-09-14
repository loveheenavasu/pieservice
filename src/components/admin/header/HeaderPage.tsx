"use client";
import * as React from "react";
import { createTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import HeaderLinks from "./children/HeaderLinks";
import Layout from "../layout/Layout";

const defaultTheme = createTheme();

export default function HeaderPage() {
  return (
    <Layout>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8} lg={12}>
            <Typography sx={{ my: 2, mt:5 }} variant="h4">
              Header
            </Typography>
            <HeaderLinks />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}
