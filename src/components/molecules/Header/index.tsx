import { Box } from "@mui/system";
import React, { useState } from "react";
import { MuiDropDown } from "../../atoms/DropDown";
import { MuiInputField } from "../../atoms/SearchField";
import { MuiTabs } from "../../atoms/Tab";
import { inputData } from "../../../imputData";
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
interface UseStateProps {
  props: inputType[];
}
export const HeaderComponent: React.FC<UseStateProps> = ({ props }) => {
  const [data, setData] = useState(props);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    setData(updatedInputData(e.target.value));
  };
  return (
    <Box
      sx={{
        display: "flex",
        width: 1239,
        height: 40,
        margin: "0px 24px",
        padding: 5,
        // backgroundColor: "#E5E5E5",
      }}
    >
      <MuiTabs props={data} />
      <Box
        sx={{
          alignItems: "flex-end",
          display: "flex",
          gap: "8px",
        }}
      >
        <MuiInputField onChange={handleSearch} />
        <MuiDropDown sx={{ width: 78, height: 40 }} content="time" />
        <MuiDropDown sx={{ width: 122, heigth: 40 }} content="All assets" />
      </Box>
      {/* <button onClick={() => setData(newData)}>Click Me</button> */}
    </Box>
  );
};
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
