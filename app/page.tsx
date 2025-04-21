import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import BlogPreview from "./components/BlogPreview";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "A dev you can trust",
  description:
    "Creating beautiful, functional, and scalable web applications that add value to your vision. A developer you can trust, a partner you can count on. Michael Smith, a software developer based in Johnson City, TN.",
  openGraph: {
    title: "A dev you can trust",
    description:
      "Creating beautiful, functional, and scalable web applications that add value to your vision. A developer you can trust, a partner you can count on. Michael Smith, a software developer based in Johnson City, TN.",
  },
};

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Work />
      <BlogPreview />
      <ContactForm />
      <Footer />
    </main>
  );
}
