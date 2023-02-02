import React from "react";
import { Typography } from "@mui/material";
import { Variant } from "@mui/material/styles/createTypography";
interface MuiTypographyProps {
  content: string;
  variant: Variant;
  sx?: object;
}
const MuiTypography: React.FC<MuiTypographyProps> = ({
  content,
  variant,
  sx,
}) => {
  return (
    <Typography sx={sx} variant={variant}>
      {content}
    </Typography>
  );
};

export default MuiTypography;
