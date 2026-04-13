import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Mail, Search, Video, Share2, BadgeDollarSign, Image as ImageIcon, BookOpen, PenSquare } from "lucide-react";

const products = [
  { name: "Affiliate System", slug: "affiliate-system", icon: BadgeDollarSign, description: "Learn how to start affiliate marketing and build online income.", keywords: ["affiliate marketing", "make money online"] },
  { name: "Content System", slug: "content-system", icon: PenSquare, description: "Create content that drives traffic.", keywords: ["content marketing"] },
  { name: "Ebook System", slug: "ebook-system", icon: BookOpen, description: "Build passive income with ebooks.", keywords: ["ebook business"] },
  { name: "Email System", slug: "email-system", icon: Mail, description: "Turn leads into sales with email.", keywords: ["email marketing"] },
  { name: "Image Generator", slug: "image-generator", icon: ImageIcon, description: "Create high-converting images.", keywords: ["graphics"] },
  { name: "Medium System", slug: "medium-system", icon: Search, description: "Get traffic from publishing platforms.", keywords: ["traffic"] },
  { name: "Sales System", slug: "sales-system", icon: ArrowRight, description: "Convert visitors into buyers.", keywords: ["sales"] },
  { name: "SEO System", slug: "seo-system", icon: Search, description: "Get free Google traffic.", keywords: ["SEO"] },
  { name: "Social System", slug: "social-system", icon: Share2, description: "Grow using social media.", keywords: ["social media"] },
  { name: "Video System", slug: "video-system", icon: Video, description: "Use video for traffic and sales.", keywords: ["video marketing"] }
];

const trackingLink = (slug) => `https://go.freebiebro.org/?src=metallfya--irc.thrivecart.com/${slug}/`;
const leadsLeapUrl = "https://leadsleap.com/?r=theojm";
const leadsLeapBanner = "https://leadsleap.com/images/b468.60.gif";

export default function RankableHomepage() {
  return (
    <>
      <Helmet>
        <title>10 Digital Systems to Make Money Online</title>
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
              <a href={leadsLeapUrl} target="_blank" rel="noopener noreferrer">
                <img
                  src={leadsLeapBanner}
                  alt="banner"
                  style={{ maxWidth: "100%" }}
                />
              </a>

              <div style={{ marginTop: "20px" }}>
                <a
                  href="https://n8n-production-01ac.up.railway.app/webhook/t?src=homepage&offer=extra-products&url=https%3A%2F%2Frotatelinkpro.com%2FTheojm%2Fmoneymakertools%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/Extra money-making tools with golden glow.png"
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
