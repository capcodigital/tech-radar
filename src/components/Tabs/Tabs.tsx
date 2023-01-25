import { useState, ReactNode } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import StyledTabs from "./styles/";

/**
 * `TabsProps` is an object with four properties, two of which are numbers, one of which is a React
 * node, and one of which is a React node.
 * @property {number} ossProjectCount - The number of open source projects you've contributed to.
 * @property {number} clientProjectCount - The number of client projects
 * @property panelOne - This is the first panel that will be displayed.
 * @property panelTwo - React.ReactNode;
 */
type TabsProps = {
  ossProjectCount: number;
  clientProjectCount: number;
  panelOne: ReactNode;
  panelTwo: ReactNode;
};

/* It's Tabs component that takes in four props and returns a styled tab component. */
const Tabs = ({
  ossProjectCount,
  clientProjectCount,
  panelOne,
  panelTwo,
}: TabsProps) => {
  const [value, setValue] = useState("1");

  /**
   * handleChange takes in an event and a newValue and sets the value to the newValue.
   * @param event - React.SyntheticEvent
   * @param {string} newValue - The new value of the tab.
   */
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  /* It's returning a styled tab component. */
  return (
    <StyledTabs>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="Project tabs" centered>
            <Tab
              label={`Client Projects (${clientProjectCount})`}
              value="1"
              disabled={clientProjectCount === 0}
            />
            <Tab
              label={`Capco OSS Projects (${ossProjectCount})`}
              value="2"
              disabled={ossProjectCount === 0}
            />
          </TabList>
        </Box>
        <TabPanel value="1">{panelOne}</TabPanel>
        <TabPanel value="2">{panelTwo}</TabPanel>
      </TabContext>
    </StyledTabs>
  );
};

export default Tabs;
