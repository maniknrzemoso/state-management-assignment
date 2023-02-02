import React from "react";
import { Box } from "@mui/system";
import { IconWithName } from "../../molecules/IconWithName";
import MuiTypography from "../../atoms/Typography";
import MuiIcon from "../../atoms/Icon";
import { Card, Stack } from "@mui/material";
interface AssetComponentProps {
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
export const AssetComponent: React.FC<AssetComponentProps> = (props) => {
  // console.log("assetComop", props);
  return (
    <Card sx={{ padding: "16px 24px" }}>
      <Stack direction={"row"}>
        <IconWithName {...props.firstField} />
        <MuiTypography
          sx={{
            display: "flex",
            alignItems: "center",
            width: 334,
            height: 42,
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "22px",
            letterSpacing: "0.01em",
          }}
          variant="body2"
          content={props.price}
        />
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
            color: "#20B03F",
          }}
          variant="body2"
          content={props.change}
        />
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
          variant="body2"
          content={props.marketCap}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: 78,
            height: 42,
          }}
        >
          <MuiIcon
            sx={{
              width: 19,
              height: 18,
            }}
            icon={props.icon}
          />
        </Box>
      </Stack>
    </Card>
  );
};
