import React from "react";
import { ArticleItem } from "../../types/article";
import { Calendar, Tag } from "lucide-react";
import styles from "./ArticleCard.module.css";

const ArticleCard: React.FC<ArticleItem> = ({
  category,
  title,
  content,
  date,
  imageUrl,
}) => (
  <div className={styles.card}>
    <img src={imageUrl} alt={title} className={styles.image} />
    <div className={styles.contentWrapper}>
      <div className={styles.metaWrapper}>
        <div className={styles.calendar}>
          <Calendar size={16} />
          <span>{date}</span>
        </div>
        <div className={styles.tag}>
          <Tag size={16} />
          <span>{category}</span>
        </div>
      </div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.subtitle}>{styles.subtitle}</p>
      <p className={styles.content}>{content}</p>
    </div>
  </div>
);

export default ArticleCard;
