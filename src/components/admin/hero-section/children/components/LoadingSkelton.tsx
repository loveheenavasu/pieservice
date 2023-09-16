import { Box, Skeleton } from "@mui/material";
import React from "react";

const CardLoader = () => (
  <Skeleton
    height={140}
    variant="rectangular"
    width={140}
    sx={{
      borderRadius: "1rem",
    }}
  />
);

export function LoadingSkelton() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          marginY: "1rem",
        }}
      >
        <Skeleton
          sx={{
            width: "16rem",
            height: "40px",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CardLoader />
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          marginBottom: "1rem",
        }}
      >
        <Skeleton
          sx={{
            width: "10rem",
            height: "26px",
          }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          gap: "20px",
        }}
      >
        {[...new Array(4).fill(1)].map((_) => (
          <CardLoader key={_} />
        ))}
      </Box>
    </Box>
  );
}
