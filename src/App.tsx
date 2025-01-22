import React from "react";
import { ToolsPanelProvider } from "./context/ToolsPanelContext";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NewsFeed from "./components/NewsFeed/NewsFeed";
import ToolsPanel from "./components/ToolsPanel/ToolsPanel";
import ToolsPanelToggle from "./components/ToolsPanelToggle/ToolsPanelToggle";

const App: React.FC = () => {
  return (
    <ToolsPanelProvider>
      <Layout
        header={<Header />}
        content={<NewsFeed />}
        sidebar={<ToolsPanel />}
        footer={<Footer />}
      />
      <ToolsPanelToggle />
    </ToolsPanelProvider>
  );
};

export default App;
