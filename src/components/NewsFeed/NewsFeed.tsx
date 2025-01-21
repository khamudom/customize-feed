import React from "react";
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
  // Combine all mock articles into one array
  const articles: ArticleItem[] = [
    ...worldNews,
    ...sportsNews,
    ...politicsNews,
    ...lifestyleNews,
  ];

  return (
    <div className={styles.container}>
      <div className={styles.feed}>
        {articles.map((item) => (
          <ArticleCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;
