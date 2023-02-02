import React from "react";
import { AssetHeading } from "../AssetHeading";
import { AssetComponent } from "../AssetComponent";
import { inputData as inpData } from "../../../imputData";
import { Card } from "@mui/material";
import { HeaderComponent } from "../../molecules/Header";
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

interface BodyComponentProps {
  props: inputType[];
}
export const BodyComponent: React.FC<BodyComponentProps> = ({ props }) => {
  // console.log("file", inpData);
  // console.log("props", props);
  return (
    <Card
      sx={{
        backgroundColor: "#E5E5E5",
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        rowGap: "10px",
      }}
    >
      {/* <HeaderComponent /> */}
      <AssetHeading />
      {props.map((data) => (
        <AssetComponent {...data} />
      ))}

      {/* <AssetComponent {...inputData[0]} />
      <AssetComponent {...inputData[1]} />
      <AssetComponent {...inputData[2]} />
      <AssetComponent {...inputData[3]} />
      <AssetComponent {...inputData[4]} />
      <AssetComponent {...inputData[5]} />
      <AssetComponent {...inputData[6]} />
      <AssetComponent {...inputData[7]} />
      <AssetComponent {...inputData[8]} /> */}
    </Card>
  );
};
