import { Box, Typography } from "@mui/material";
import React from "react";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";

export function AddLogo({
  addLogo,
  disabled,
}: {
  addLogo: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}
    >
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
            <LibraryAddIcon
              color={disabled ? "disabled" : "primary"}
              fontSize="small"
            />
            <Typography
              sx={{
                color: disabled ? "gray" : "black",
              }}
            >
              Add Logos
            </Typography>
          </Box>
        </Box>
      </div>
      <input
        type="file"
        disabled={disabled}
        title={
          disabled
            ? "Currently you can only upload maximum 4 logos"
            : "Add Logos"
        }
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          cursor: disabled ? "not-allowed" : "pointer",
          height: "100%",
          opacity: 0,
          zIndex: 111,
        }}
        onChange={addLogo}
      />
    </Box>
  );
}
