import { TextField, InputAdornment, Button } from "@mui/material";
import MuiIcon from "../Icon";
import { inputData } from "../../../imputData";
// import { HeaderComponent } from "../../molecules/Header";
interface MuiInputFieldProps {
  // onChange: React.ChangeEvent<HTMLInputElement>;
}
export const MuiInputField: React.FC<MuiInputFieldProps> = () => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    updatedInputData(e.target.value);
    return updatedInputData(e.target.value);
  };
  return (
    <TextField
      onChange={handleSearch}
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
interface inputType {
  firstField: {
    icon: string;
    content: string;
    symbol: string;
  };
  price: string;
  change: string;
  marketCap: string;
  icon: string;
}

const updatedInputData = (value: string) => {
  let str = value;
  // console.log(str);
  const temp: inputType[] = [];
  // console.log("ran", inputData);
  for (let obj of inputData) {
    if (obj.firstField.content.toLowerCase().includes(str.toLowerCase())) {
      temp.push(obj);
    }
  }
  return temp;
};
