import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  Search,
  Video,
  Share2,
  BadgeDollarSign,
  Image as ImageIcon,
  BookOpen,
  PenSquare,
} from "lucide-react";

const products = [
  { name: "Affiliate System", slug: "affiliate-system", icon: BadgeDollarSign, description: "Learn how to start affiliate marketing and build income.", keywords: ["affiliate marketing"] },
  { name: "Content System", slug: "content-system", icon: PenSquare, description: "Create content that drives traffic.", keywords: ["content marketing"] },
  { name: "Ebook System", slug: "ebook-system", icon: BookOpen, description: "Build passive income with ebooks.", keywords: ["ebooks"] },
  { name: "Email System", slug: "email-system", icon: Mail, description: "Turn leads into sales with email.", keywords: ["email marketing"] },
  { name: "Image Generator", slug: "image-generator", icon: ImageIcon, description: "Create marketing visuals.", keywords: ["graphics"] },
  { name: "Medium System", slug: "medium-system", icon: Search, description: "Tap into built-in traffic.", keywords: ["medium"] },
  { name: "Sales System", slug: "sales-system", icon: ArrowRight, description: "Convert traffic into buyers.", keywords: ["sales"] },
  { name: "SEO System", slug: "seo-system", icon: Search, description: "Get free Google traffic.", keywords: ["SEO"] },
  { name: "Social System", slug: "social-system", icon: Share2, description: "Grow on social media.", keywords: ["social"] },
  { name: "Video System", slug: "video-system", icon: Video, description: "Use video for traffic.", keywords: ["video"] }
];

const getSrc = () => {
  if (typeof window === "undefined") return "homepage";
  const params = new URLSearchParams(window.location.search);
  const srcFromUrl = params.get("src");
  const savedSrc = localStorage.getItem("funnel_src");
  const src = srcFromUrl || savedSrc || "homepage";
  localStorage.setItem("funnel_src", src);
  return src;
};

export default function RankableHomepage() {
  const src = getSrc();

  const trackingLink = (slug) => {
    const encodedSrc = encodeURIComponent(src);
    const url = encodeURIComponent(`https://metallfya--irc.thrivecart.com/${slug}/`);
    return `https://n8n-production-01ac.up.railway.app/webhook/t?src=${encodedSrc}&offer=${slug}&url=${url}`;
  };

  const leadsLeapTrackedUrl = () => {
    const encodedSrc = encodeURIComponent(src);
    const url = encodeURIComponent("https://leadsleap.com/?r=theojm");
    return `https://n8n-production-01ac.up.railway.app/webhook/t?src=${encodedSrc}&offer=leadsleap-banner&url=${url}`;
  };

  const extraProductsTrackedUrl = () => {
    const encodedSrc = encodeURIComponent(src);
    const url = encodeURIComponent("https://rotatelinkpro.com/Theojm/moneymakertools/");
    return `https://n8n-production-01ac.up.railway.app/webhook/t?src=${encodedSrc}&offer=extra-products&url=${url}`;
  };

  const leadsLeapBanner = "https://imgallery.llsvr.com/theojm.69d5cbe0d1953.png";
  const extraProductsBanner = "https://imgallery.llsvr.com/theojm.69dd41eda403c.png";

  return (
    <>
      <Helmet>
        <title>10 Digital Systems to Make Money Online</title>
      </Helmet>

      <div className="min-h-screen bg-slate-950 text-white text-center py-20">

        <h1 className="text-4xl font-bold mb-6">
          10 Systems To Build Traffic, Leads, and Income
        </h1>

        <a
          href={trackingLink("affiliate-system")}
          className="bg-white text-black px-6 py-3 rounded-xl font-bold inline-block"
        >
          Start Here
        </a>

        {/* PRODUCTS */}
        <div className="grid md:grid-cols-3 gap-6 px-6 mt-16">
          {products.map((product) => (
            <div key={product.slug} className="bg-slate-800 p-6 rounded-xl">
              <h3 className="text-xl font-bold">{product.name}</h3>
              <p className="text-slate-300 mt-2">{product.description}</p>

              <a
                href={trackingLink(product.slug)}
                className="mt-4 inline-block bg-white text-black px-4 py-2 rounded"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>

        {/* 🔥 FIXED BANNERS SECTION */}
        <div style={{ marginTop: "60px" }}>

          {/* Banner 1 */}
          <a
            href={leadsLeapTrackedUrl()}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "block", marginBottom: "25px" }}
          >
            <img
              src={leadsLeapBanner}
              alt="LeadsLeap Banner"
              style={{
                maxWidth: "468px",
                width: "100%",
                borderRadius: "10px",
                display: "block",
                margin: "0 auto"
              }}
            />
          </a>

          {/* Banner 2 */}
          <a
            href={extraProductsTrackedUrl()}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "block" }}
          >
            <img
              src={extraProductsBanner}
              alt="Extra Products"
              style={{
                maxWidth: "468px",
                width: "100%",
                borderRadius: "10px",
                display: "block",
                margin: "0 auto"
              }}
            />
          </a>

        </div>

      </div>
    </>
  );
}
