import React from "react";
import { useToolsPanel } from "../../context/ToolsPanelContext";
import { ArticleItem } from "../../types/article";
import ArticleCard from "../ArticleCard/ArticleCard";
import styles from "./NewsFeed.module.css";
import {
  worldNews,
  sportsNews,
  politicsNews,
  lifestyleNews,
} from "../../data/mockArticles";

const NewsFeed: React.FC = () => {
  const { backgroundColor } = useToolsPanel();

  const articles: ArticleItem[] = [
    ...worldNews,
    ...sportsNews,
    ...politicsNews,
    ...lifestyleNews,
  ];

  return (
    <div className={`${styles.container} ${styles[backgroundColor]}`}>
      <div className={styles.feed}>
        {articles.map((item) => (
          <ArticleCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;
