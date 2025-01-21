export interface ArticleItem {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  imageUrl: string;
  category: string;
  date: string;
  size?: "small" | "medium" | "large";
}
