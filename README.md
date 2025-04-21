# Michael Smith Website

A modern, statically generated personal website and blog built with Next.js 14 and deployed via Firebase Hosting.

## 🚀 Features

- **Static Site Generation**: Pre-rendered pages for optimal performance
- **Modern Tech Stack**: Next.js 14, TypeScript, React 18, and TailwindCSS
- **HTML-based Blog**: Simple and flexible content management using HTML files
- **SEO Optimized**: Dynamic metadata generation for each page
- **Responsive Design**: Mobile-first approach with TailwindCSS
- **Firebase Hosting**: Global CDN distribution for fast loading times

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **UI Library**: React 18
- **Styling**: TailwindCSS
- **Hosting**: Firebase
- **Content Management**: HTML files with TypeScript manifest

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── components/        # Reusable React components
│   ├── blog/             # Blog section with dynamic routing
│   │   ├── [slug]/      # Dynamic route for blog posts
│   │   └── manifest.ts  # Blog post metadata
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Homepage
├── content/              # Content directory
│   └── blog/            # HTML blog post files
├── public/              # Static assets
└── firebase/           # Firebase configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn
- Firebase CLI (for deployment)

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/michael-smith-website.git
cd michael-smith-website
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Run the development server

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Content Management

### Adding a New Blog Post

1. Create a new HTML file in `/content/blog/` with your post content
2. Add the post metadata to `app/blog/manifest.ts`:

```typescript
{
  slug: "your-post-slug",
  title: "Your Post Title",
  date: "MM/DD/YYYY",
  excerpt: "Brief description of your post",
  type: "blog" | "work",
  headerImage: "/path-to-image.jpg",
  metaDescription: "SEO description",
  shareDescription: "Social media description",
  shareImage: "/path-to-share-image.jpg",
  readTime: "X min read",
  tags: ["tag1", "tag2"]
}
```

## 🚀 Deployment

The site is deployed using Firebase Hosting. To deploy:

1. Build the project

```bash
npm run build
# or
yarn build
```

2. Deploy to Firebase

```bash
firebase deploy
```

## 🔧 Development Workflow

1. Create/update content in `/content/blog/`
2. Update metadata in `manifest.ts`
3. Test locally with `npm run dev`
4. Build and deploy to Firebase

## 🛡️ Security

- Static site generation reduces attack surface
- No server-side code execution in production
- Firebase security rules for hosting
- HTML content sanitization through React

## 📈 Performance

- Static generation for fast page loads
- TailwindCSS for optimized CSS
- Firebase CDN for global distribution
- Next.js image optimization
- Pre-rendered HTML content

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

Michael Smith - me@michaellynnsmith.com
Phone - 276-285--9430
