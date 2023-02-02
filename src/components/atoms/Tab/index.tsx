import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { Box, Tabs, Tab, Typography } from "@mui/material";
import { useState } from "react";
import { BodyComponent } from "../../organisms/Body";

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

interface MuiTabsProps {
  props: inputType[];
}

export const MuiTabs: React.FC<MuiTabsProps> = ({ props }) => {
  const [tab, setTab] = useState(0);
  // console.log("Muitabs", props);
  const handleTabClick = (
    event: React.SyntheticEvent<Element, Event>,
    value: any
  ) => {
    // console.log(value);
    setTab(value);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        width: 773,
        height: 36,
        // backgroundColor: "#E5E5E5",
      }}
    >
      <Tabs value={tab} onChange={handleTabClick}>
        <Tab
          sx={{ paddingBottom: 0 }}
          label={<Typography variant="subtitle2">All Assets</Typography>}
        />
        <Tab
          sx={{ paddingBottom: 0 }}
          label={
            <Typography sx={{ width: 91, height: 28 }} variant="subtitle2">
              WatchList
            </Typography>
          }
        />
      </Tabs>
      <TabPanel value={tab} index={0}>
        <BodyComponent props={props} />
      </TabPanel>
    </Box>
  );
};

interface TabPanelProps {
  children?: ReactJSXElement;
  value: number;
  index: number;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, value, index }) => {
  return <div>{value === index && <div>{children}</div>}</div>;
};
