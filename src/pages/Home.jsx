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
  { name: "Affiliate System", slug: "affiliate-system", icon: BadgeDollarSign, description: "Learn how to start affiliate marketing, promote digital products, and build online income.", keywords: ["affiliate marketing", "make money online"] },
  { name: "Content System", slug: "content-system", icon: PenSquare, description: "Create content that brings attention and traffic.", keywords: ["content marketing", "traffic"] },
  { name: "Ebook System", slug: "ebook-system", icon: BookOpen, description: "Build passive income with digital products.", keywords: ["ebooks", "passive income"] },
  { name: "Email System", slug: "email-system", icon: Mail, description: "Turn leads into daily commissions with email marketing.", keywords: ["email marketing", "list building"] },
  { name: "Image Generator", slug: "image-generator", icon: ImageIcon, description: "Create eye-catching graphics.", keywords: ["graphics", "visual content"] },
  { name: "Medium System", slug: "medium-system", icon: Search, description: "Tap into built-in audiences.", keywords: ["medium traffic"] },
  { name: "Sales System", slug: "sales-system", icon: ArrowRight, description: "Convert visitors into buyers.", keywords: ["sales", "conversion"] },
  { name: "SEO System", slug: "seo-system", icon: Search, description: "Get free Google traffic.", keywords: ["SEO", "google traffic"] },
  { name: "Social System", slug: "social-system", icon: Share2, description: "Grow your audience.", keywords: ["social media"] },
  { name: "Video System", slug: "video-system", icon: Video, description: "Use video to drive traffic.", keywords: ["video marketing"] }
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
  const src = getSrc(); // ✅ LOCKED ONCE

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
    <div className="min-h-screen bg-slate-950 text-white">

      <div className="text-center py-20">
        <h1 className="text-4xl font-bold">10 Systems To Make Money Online</h1>

        <div className="mt-6 flex justify-center gap-4">
          <a href={trackingLink("affiliate-system")} className="bg-white text-black px-6 py-3 rounded-xl font-bold">
            Start Here
          </a>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 px-6">
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

      <div className="text-center mt-20">

        {/* LeadsLeap Banner */}
        <a href={leadsLeapTrackedUrl()} target="_blank" rel="noopener noreferrer">
          <img
            src={leadsLeapBanner}
            alt="LeadsLeap Banner"
            style={{
              maxWidth: "468px",
              width: "100%",
              borderRadius: "10px",
              margin: "20px auto",
              display: "block"
            }}
          />
        </a>

        {/* Extra Products Banner */}
        <a href={extraProductsTrackedUrl()} target="_blank" rel="noopener noreferrer">
          <img
            src={extraProductsBanner}
            alt="Extra Products"
            style={{
              maxWidth: "468px",
              width: "100%",
              borderRadius: "10px",
              margin: "20px auto",
              display: "block"
            }}
          />
        </a>

      </div>

    </div>
  );
}
