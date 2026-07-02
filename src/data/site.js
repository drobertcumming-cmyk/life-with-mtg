import { posts, categories } from './blog.js';

// Base-path aware URL builder. import.meta.env.BASE_URL is "/" at root, or
// "/<repo>/" for a GitHub Pages project site (set via the CI workflow). This
// keeps every internal link and asset correct in both cases.
const BASE = import.meta.env.BASE_URL || '/';
export const withBase = (p) => (BASE + String(p).replace(/^\//, '')).replace(/([^:])\/{2,}/g, '$1/');

export const postUrl = (slug) => withBase(`/posts/${slug}/`);
export const categoryUrl = (slug) => withBase(`/category/${slug}/`);
export const imgUrl = (image) => withBase(`/assets/${image.replace(/^assets\//, '')}`);

// Newest-first across all posts.
export const sortedPosts = () => posts.slice().sort((a, b) => b.dateSort - a.dateSort);

export const postsInCategory = (catSlug) =>
  posts.filter((p) => p.catSlug === catSlug).sort((a, b) => b.dateSort - a.dateSort);

export const categoryBySlug = (slug) => categories.find((c) => c.slug === slug);

// Kicker line for a post: "Subcategory" when present, else the full category.
export const kickerOf = (p) => (p.subcategory ? p.subcategory : p.category);

// Short category label used on compact cards.
export const shortCat = {
  'Politics & Power': 'Politics',
  'Money & the Economy': 'Money',
  'Health & Freedom Over Your Body': 'Health',
  'Food & the Land': 'Food',
  'Life & Family': 'Life',
  'Faith': 'Faith',
};
