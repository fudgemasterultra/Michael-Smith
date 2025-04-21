import Link from "next/link";
import { notFound } from "next/navigation";
import { promises as fs } from "fs";
import Navbar from "@/app/components/Navbar";
import ContactForm from "@/app/components/ContactForm";
import Footer from "@/app/components/Footer";
import { blogPosts } from "../manifest";
import Head from "next/head";
import type { Metadata } from "next";
// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((blogs) => blogs.slug);
}

async function readHTML(path: string) {
  const data = await fs.readFile(`content\\blog\\${path}.html`, "utf-8");
  return data;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = blogPosts.find((blog) => blog.slug === params.slug);

  if (!post) {
    notFound();
  }

  return {
    title: post.title,
    description: post.metaDescription,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      images: [post.shareImage],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = blogPosts.find((blog) => blog.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.metaDescription} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:image" content={post.shareImage} />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_APP_URL}/blog/${post.slug}`}
        />
      </Head>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link
          href="/blog"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Blog
        </Link>

        <article className="prose prose-lg max-w-none prose-p:my-4 prose-li:my-2 prose-strong:text-gray-900 prose-strong:font-semibold">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>
          <img src={post.headerImage} alt={post.title} />
          <div className="text-gray-500 mb-8">
            {new Date(post.date).toLocaleDateString()}
          </div>
          <div
            className="prose prose-lg max-w-none [&>p]:my-4 [&>li]:my-2 [&>strong]:text-gray-900 [&>strong]:font-semibold"
            dangerouslySetInnerHTML={{ __html: await readHTML(post.slug) }}
          />
        </article>
      </div>
      <ContactForm />
      <Footer />
    </>
  );
}
