import { Box, Stack } from "@mui/system";
import React from "react";
import MuiIcon from "../../atoms/Icon";
import MuiTypography from "../../atoms/Typography";
interface IconWithNameProps {
  icon: string;
  content: string;
  symbol: string;
}
export const IconWithName: React.FC<IconWithNameProps> = ({
  icon,
  content,
  symbol,
}) => {
  return (
    <Stack
      direction={"row"}
      sx={{
        width: "300px",
        height: "42px",
        gap: "10px",
      }}
    >
      <MuiIcon sx={{ height: "42px", width: "42px" }} icon={icon} />
      <Stack>
        <MuiTypography
          sx={{
            fontWeight: "500",
            size: "16px",
            LineHeight: "22px",
            letterSpacing: "0.01em",
            alignItems: "center",
          }}
          content={content}
          variant={"body1"}
        />
        <MuiTypography
          sx={{
            fontWeight: "400",
            size: "12px",
            letterSpacing: "0.01em",
            lineHeight: "14px",
          }}
          content={symbol}
          variant={"overline"}
        />
      </Stack>
    </Stack>
  );
};
