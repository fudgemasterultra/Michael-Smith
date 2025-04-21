type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  type: "blog" | "work";
  headerImage: string;
  metaDescription: string;
  shareDescription: string;
  shareImage: string;
  readTime: string;
  tags: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "la-brea-bakery-drupal-upgrade",
    title: "Upgrading La Brea Bakery",
    date: "04/20/2025",
    excerpt:
      "Upgraded La Brea Bakery’s site to Drupal 10, improved workflows, and built custom pages for new campaigns.",
    type: "work",
    headerImage: "/blog-images/lbb/labrea-breads.jpg",
    metaDescription:
      "See how I helped upgrade La Brea Bakery’s Drupal 9 website to Drupal 10 using DDEV, built custom landing pages, and improved development workflows with Docker and Pantheon.",
    shareDescription:
      "See how I helped upgrade La Brea Bakery’s Drupal 9 website to Drupal 10 using DDEV, built custom landing pages, and improved development workflows with Docker and Pantheon.",
    shareImage: "/blog-images/lbb/labrea-breads.jpg",
    readTime: "5 Minutes",
    tags: ["Drupal", "PHP", "Docker"],
  },
  {
    slug: "house-autry-shopify-customization",
    title: "House Autry Shopify Customization",
    date: "2024-03-20",
    excerpt:
      "I recently had the opportunity to contribute to House Autry's website, focusing on enhancing their Food Servicesection and building out new functionality within their existing Shopify setup.",
    headerImage: "/blog-images/house-autry-blog/house-autry-main.png",
    metaDescription:
      "See how I enhanced House Autry's Shopify site by expanding their food service section, adding lead capture forms, and laying the groundwork for a blog—all while preserving SEO and working with a third-party theme.",
    shareDescription:
      "See how I enhanced House Autry's Shopify site by expanding their food service section, adding lead capture forms, and laying the groundwork for a blog—all while preserving SEO and working with a third-party theme.",
    shareImage: "/blog-images/house-autry-blog/house-autry-main.png",
    readTime: "8 min read",
    type: "work",
    tags: ["Shopify", "Liquid", "Javascript"],
  },
  {
    slug: "scott-county-tourism-kiosk",
    title: "Scott County Tourism Kiosk",
    date: "2024-03-20",
    excerpt:
      "Discover how I helped build a wheelchair-accessible tourism kiosk for Scott County, VA using Flutter and Android. Features include e-postcards, travel guide downloads, and live event syncing with WordPress.",
    headerImage: "/blog-images/scott-county/opening-page.png",
    metaDescription:
      "Discover how I helped build a wheelchair-accessible tourism kiosk for Scott County, VA using Flutter and Android. Features include e-postcards, travel guide downloads, and live event syncing with WordPress.",
    shareDescription:
      "Discover how I helped build a wheelchair-accessible tourism kiosk for Scott County, VA using Flutter and Android. Features include e-postcards, travel guide downloads, and live event syncing with WordPress.",
    shareImage: "/blog-images/scott-county/opening-page.png",
    readTime: "8 min read",
    type: "work",
    tags: ["Flutter", "WordPress", "ADA"],
  },
];
