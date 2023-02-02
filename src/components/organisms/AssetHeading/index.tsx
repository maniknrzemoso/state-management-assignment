import { Box } from "@mui/system";
import React from "react";
import MuiTypography from "../../atoms/Typography";
export const AssetHeading = () => {
  return (
    <Box sx={{ display: "flex", margin: "0px 24px" }}>
      <MuiTypography
        sx={{
          display: "flex",
          alignItems: "center",
          width: 300,
          height: 42,
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "22px",
          letterSpacing: "0.01em",
        }}
        variant="caption"
        content={"Name"}
      />
      <MuiTypography
        sx={{
          display: "flex",
          alignItems: "center",
          width: 337,
          height: 42,
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "22px",
          letterSpacing: "0.01em",
        }}
        variant="caption"
        content={"Price"}
      />{" "}
      <MuiTypography
        sx={{
          display: "flex",
          alignItems: "center",
          width: 239,
          height: 42,
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "22px",
          letterSpacing: "0.01em",
        }}
        variant="caption"
        content={"Change"}
      />{" "}
      <MuiTypography
        sx={{
          display: "flex",
          alignItems: "center",
          width: 237,
          height: 42,
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "22px",
          letterSpacing: "0.01em",
        }}
        variant="caption"
        content={"Market Cap"}
      />{" "}
      <MuiTypography
        sx={{
          display: "flex",
          alignItems: "center",
          width: 78,
          height: 42,
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "22px",
          letterSpacing: "0.01em",
        }}
        variant="caption"
        content={"Watch"}
      />
    </Box>
  );
};
