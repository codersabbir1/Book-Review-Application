import { useState } from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

function TabContents() {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab>Read Books</Tab>
        <Tab>Wishlist Books</Tab>
      </TabList>
      <TabPanel>
        <h1 className="text-2xl">Read Books</h1>
      </TabPanel>
      <TabPanel>
        <h1 className="text-2xl">Wishlist Books</h1>
      </TabPanel>
    </Tabs>
  );
}

export default TabContents;
