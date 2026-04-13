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
  { name: "Affiliate System", slug: "affiliate-system", icon: BadgeDollarSign, description: "Start affiliate marketing and build income.", keywords: ["affiliate marketing"] },
  { name: "Content System", slug: "content-system", icon: PenSquare, description: "Create content that drives traffic.", keywords: ["content marketing"] },
  { name: "Ebook System", slug: "ebook-system", icon: BookOpen, description: "Build passive income with ebooks.", keywords: ["ebooks"] },
  { name: "Email System", slug: "email-system", icon: Mail, description: "Turn leads into sales with email.", keywords: ["email marketing"] },
  { name: "Image Generator", slug: "image-generator", icon: ImageIcon, description: "Create visuals that convert.", keywords: ["graphics"] },
  { name: "Medium System", slug: "medium-system", icon: Search, description: "Get traffic from publishing platforms.", keywords: ["traffic"] },
  { name: "Sales System", slug: "sales-system", icon: ArrowRight, description: "Convert visitors into buyers.", keywords: ["sales"] },
  { name: "SEO System", slug: "seo-system", icon: Search, description: "Get free Google traffic.", keywords: ["seo"] },
  { name: "Social System", slug: "social-system", icon: Share2, description: "Grow using social media.", keywords: ["social"] },
  { name: "Video System", slug: "video-system", icon: Video, description: "Use video for traffic and sales.", keywords: ["video"] },
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

const trackingLink = (slug) => {
  const src = encodeURIComponent(getSrc());
  const url = encodeURIComponent(`https://metallfya--irc.thrivecart.com/${slug}/`);
  return `https://n8n-production-01ac.up.railway.app/webhook/t?src=${src}&offer=${slug}&url=${url}`;
};

const leadsLeapTrackedUrl = () => {
  const src = encodeURIComponent(getSrc());
  const url = encodeURIComponent("https://leadsleap.com/?r=theojm");
  return `https://n8n-production-01ac.up.railway.app/webhook/t?src=${src}&offer=leadsleap-banner&url=${url}`;
};

const extraProductsTrackedUrl = () => {
  const src = encodeURIComponent(getSrc());
  const url = encodeURIComponent("https://rotatelinkpro.com/Theojm/moneymakertools/");
  return `https://n8n-production-01ac.up.railway.app/webhook/t?src=${src}&offer=extra-products&url=${url}`;
};

export default function RankableHomepage() {
  const pageTitle = "10 Digital Systems to Make Money Online | FreebieBro";

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>

      <div className="min-h-screen bg-slate-950 text-white">

        <main className="mx-auto max-w-7xl px-6 py-16">

          <section id="products">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {products.map((product) => {
                const Icon = product.icon;
                return (
                  <div key={product.slug} className="p-6 bg-slate-900 rounded-2xl">
                    <Icon />
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>

                    <a href={trackingLink(product.slug)}>
                      Learn More
                    </a>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="mt-16 text-center">

            <a href={trackingLink("affiliate-system")}>
              Start With Affiliate System
            </a>

            <div style={{ marginTop: "30px" }}>
              <a href={leadsLeapTrackedUrl()} target="_blank" rel="noopener noreferrer">
                <img
                  src="https://imgallery.llsvr.com/theojm.69d5cbe0d1953.png"
                  alt="banner"
                  style={{ maxWidth: "100%" }}
                />
              </a>

              <div style={{ marginTop: "20px" }}>
                <a href={extraProductsTrackedUrl()} target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://imgallery.llsvr.com/theojm.69dd41eda403c.png"
                    alt="products"
                    style={{ maxWidth: "100%" }}
                  />
                </a>
              </div>
            </div>

          </section>

        </main>
      </div>
    </>
  );
}
