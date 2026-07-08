"use client";

import Heading from "./Heading";
import Card from "./Card";

const projects = [
  // ── New projects with live links ──────────────────────────────────────────
  {
    id: 10,
    title: "Craft Project",
    desc: "A beautifully designed craft showcase website built with modern web technologies.",
    img: "https://craft-phi-swart.vercel.app/opengraph-image.png",
    tags: ["Next.JS", "Tailwind", "TypeScript"],
    link: "https://craft-phi-swart.vercel.app/",
  },
  {
    id: 11,
    title: "Crux SST Book",
    desc: "A full documentation site for the Crux SST book, built with Docusaurus.",
    img: "https://crux-sst-book.vercel.app/img/docusaurus-social-card.jpg",
    tags: ["Docusaurus", "MDX", "TypeScript"],
    link: "https://crux-sst-book.vercel.app/",
  },
  {
    id: 12,
    title: "AI Todo App",
    desc: "An AI-powered todo application that helps you manage tasks intelligently.",
    img: "https://ai-todo-ap.vercel.app/opengraph-image.png",
    tags: ["Next.JS", "AI", "TypeScript"],
    link: "https://ai-todo-ap.vercel.app/",
  },
  {
    id: 13,
    title: "Agentic PowerFit Gym",
    desc: "A modern gym website with agentic AI features for personalized fitness retention.",
    img: "https://agentic-retention-gym-website.vercel.app/opengraph-image.png",
    tags: ["Next.JS", "AI", "Tailwind"],
    link: "https://agentic-retention-gym-website.vercel.app/",
  },
  {
    id: 14,
    title: "Clothing E-Commerce",
    desc: "A full-featured clothing e-commerce store with Sanity CMS and dynamic product pages.",
    img: "https://test-sanity-e-commerce-g9rz.vercel.app/opengraph-image.png",
    tags: ["Next.JS", "Sanity", "Tailwind"],
    link: "https://test-sanity-e-commerce-g9rz.vercel.app/",
  },
  {
    id: 15,
    title: "Travel Agency Website",
    desc: "A multi-page travel agency website with destination listings and booking UI.",
    img: "https://multi-pages-travel-agency.vercel.app/opengraph-image.png",
    tags: ["Next.JS", "Tailwind", "TypeScript"],
    link: "https://multi-pages-travel-agency.vercel.app/",
  },
  {
    id: 16,
    title: "Admin Dashboard",
    desc: "A fully responsive admin dashboard with charts, tables and data management.",
    img: "https://admin-dashboard-seven-gamma-58.vercel.app/opengraph-image.png",
    tags: ["Next.JS", "Tailwind", "TypeScript"],
    link: "https://admin-dashboard-seven-gamma-58.vercel.app/",
  },
  // ── Original projects (links to be added later) ───────────────────────────
  {
    id: 0,
    title: "Todo List",
    desc: "A React & TypeScript based app for managing and organizing your tasks efficiently.",
    img: "/projects_1.PNG",
    tags: ["React", "Node", "CSS", "TypeScript"],
    link: "",
  },
  {
    id: 1,
    title: "Countdown Timer",
    desc: "A Next.js and TypeScript powered website to track time with an interactive countdown feature.",
    img: "/projects_2.png",
    tags: ["Next.JS", "Node", "CSS", "TypeScript"],
    link: "",
  },
  {
    id: 2,
    title: "Weather Widget",
    desc: "A Next.js and TypeScript based tool for fetching and displaying real-time weather data.",
    img: "/projects_3.png",
    tags: ["Next.JS", "Node", "CSS", "TypeScript"],
    link: "",
  },
  {
    id: 3,
    title: "Currency Converter",
    desc: "A simple HTML and TypeScript powered tool for converting currencies with real-time rates.",
    img: "/projects_4.PNG",
    tags: ["HTML", "Node", "CSS", "TypeScript"],
    link: "",
  },
  {
    id: 4,
    title: "Static Interactive Resume",
    desc: "A TypeScript-based interactive resume built with HTML and CSS, allowing users to showcase their skills dynamically.",
    img: "/projects_5.PNG",
    tags: ["HTML", "Node", "CSS", "TypeScript"],
    link: "",
  },
  {
    id: 5,
    title: "Simple Calculator",
    desc: "A basic HTML CSS and TypeScript calculator for performing essential arithmetic operations.",
    img: "/projects_6.PNG",
    tags: ["HTML", "Node", "CSS", "TypeScript"],
    link: "",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-3xl opacity-5"
          style={{ background: "radial-gradient(ellipse, #08E95E, transparent)" }}
        />
      </div>
      <div className="container mx-auto px-6 max-w-7xl">
        <Heading title="Projects" subtitle="\u2014 My Work \u2014" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {projects.map((p, i) => (
            <Card key={p.id} {...p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
