import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
} from "@mui/material";
import React from "react";
import MuiTypography from "../Typography";

interface MuiDropDownProps {
  sx?: object;
  content: string;
}
export const MuiDropDown: React.FC<MuiDropDownProps> = ({ sx, content }) => {
  return (
    <FormControl size="small" sx={sx}>
      <InputLabel>
        {/* {<MuiTypography sx={{ padding: 0 }} variant="body1" content="time" />} */}
        {content}
      </InputLabel>
      <Select
        labelId="demo-simple-select-label"
        label={<MuiTypography variant="body1" content={content} />}
      >
        <MenuItem>24h</MenuItem>
        <MenuItem>12h</MenuItem>
        <MenuItem>1h</MenuItem>
      </Select>
    </FormControl>
  );
};
