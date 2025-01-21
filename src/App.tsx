import React from "react";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NewsFeed from "./components/NewsFeed/NewsFeed";
import ToolsPanelWrapper from "./components/ToolsPanelWrapper/ToolsPanelWrapper";

const App: React.FC = () => {
  return (
    <Layout
      header={<Header />}
      content={<NewsFeed />}
      sidebar={<ToolsPanelWrapper />}
      footer={<Footer />}
    />
  );
};

export default App;
