import React, { FC } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import StyledTabs from "./styles/";

type TabsProps = {
  ossProjectCount: number;
  clientProjectCount: number;
  panelOne: React.ReactNode;
  panelTwo: React.ReactNode;
};

const Tabs: FC<TabsProps> = ({
  ossProjectCount,
  clientProjectCount,
  panelOne,
  panelTwo,
}) => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <StyledTabs>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="Project tabs" centered>
            <Tab label={`Client Projects (${clientProjectCount})`} value="1" />
            <Tab label={`Capco OSS Projects (${ossProjectCount})`} value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">{panelOne}</TabPanel>
        <TabPanel value="2">{panelTwo}</TabPanel>
      </TabContext>
    </StyledTabs>
  );
};

export default Tabs;
