import React from "react";
import { ToolsPanelProvider } from "./context/ToolsPanelContext";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NewsFeed from "./components/NewsFeed/NewsFeed";
import ToolsPanel from "./components/ToolsPanel/ToolsPanel";

const App: React.FC = () => {
  return (
    <ToolsPanelProvider>
      <Layout
        header={<Header />}
        content={<NewsFeed />}
        sidebar={<ToolsPanel />}
        footer={<Footer />}
      />
    </ToolsPanelProvider>
  );
};

export default App;
