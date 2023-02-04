import { TextField, InputAdornment, Button } from "@mui/material";
import MuiIcon from "../Icon";
// import { inputData } from "../../../imputData";
import { ChangeEventHandler } from "react";
// import { HeaderComponent } from "../../molecules/Header";
interface MuiInputFieldProps {
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}
export const MuiInputField: React.FC<MuiInputFieldProps> = ({ onChange }) => {
  return (
    <TextField
      onChange={onChange}
      label="search all assets"
      size="small"
      sx={{ width: "230px", height: 40 }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Button>
              <MuiIcon sx={{ width: 20, height: 20 }} icon="search" />
            </Button>
          </InputAdornment>
        ),
      }}
    />
  );
};
