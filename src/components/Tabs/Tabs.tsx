import { ReactNode, useState, SyntheticEvent } from "react";
import Box from "@mui/material/Box";
import MuiTabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import StyledTabs from "./styles/";

/**
 * `TabsProps` is an object with four properties, two of which are numbers, one of which is a React
 * node, and one of which is a React node.
 * @property {number} ossProjectCount - The number of open source projects you've contributed to.
 * @property {number} clientProjectCount - The number of client projects
 * @property panelOne - This is the first panel that will be displayed.
 * @property panelTwo - ReactNode;
 */

interface TabsProps {
  ossProjectCount: number;
  clientProjectCount: number;
  panelOne: ReactNode;
  panelTwo: ReactNode;
}

interface TabPanelProps {
  value: number;
  index: number;
  children: ReactNode;
}

/* tabPanel and tabsprops*/

function TabPanel({ value, index, children }: TabPanelProps) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

/* It's Tabs component that takes in four props and returns a styled tab component. */

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
export default function Tabs({
  ossProjectCount,
  clientProjectCount,
  panelOne,
  panelTwo,
}: TabsProps) {
  const [value, setValue] = useState(clientProjectCount > 0 ? 0 : 1);

  /**
   * handleChange takes in an event and a newValue and sets the value to the newValue.
   * @param event - SyntheticEvent
   * @param {string} newValue - The new value of the tab.
   */
  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  /* It's returning a styled tab component. */
  return (
    <StyledTabs>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <MuiTabs
          value={value}
          onChange={handleChange}
          aria-label="Project tabs"
        >
          <Tab
            label={`Client Projects (${clientProjectCount})`}
            {...a11yProps(0)}
            disabled={clientProjectCount === 0}
          />
          <Tab
            label={`Capco OSS Projects (${ossProjectCount})`}
            {...a11yProps(1)}
            disabled={ossProjectCount === 0}
          />
        </MuiTabs>
      </Box>

      <TabPanel value={value} index={0}>
        {panelOne}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {panelTwo}
      </TabPanel>
    </StyledTabs>
  );
}
