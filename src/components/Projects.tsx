"use client";

import Heading from "./Heading";
import Card from "./Card";

const projects = [
  { id:0, title:"Todo List",               desc:"A React & TypeScript based app for managing and organizing your tasks efficiently.",                                    img:"/projects_1.PNG", tags:["React","Node","CSS","TypeScript"] },
  { id:1, title:"Countdown Timer",          desc:"A Next.js and TypeScript powered website to track time with an interactive countdown feature.",                         img:"/projects_2.png", tags:["Next.JS","Node","CSS","TypeScript"] },
  { id:2, title:"Weather Widget",           desc:"A Next.js and TypeScript based tool for fetching and displaying real-time weather data.",                               img:"/projects_3.png", tags:["Next.JS","Node","CSS","TypeScript"] },
  { id:3, title:"Currency Converter",       desc:"A simple HTML and TypeScript powered tool for converting currencies with real-time rates.",                            img:"/projects_4.PNG", tags:["HTML","Node","CSS","TypeScript"] },
  { id:4, title:"Static Interactive Resume",desc:"A TypeScript-based interactive resume built with HTML and CSS, allowing users to showcase their skills dynamically.",  img:"/projects_5.PNG", tags:["HTML","Node","CSS","TypeScript"] },
  { id:5, title:"Simple Calculator",        desc:"A basic HTML CSS and TypeScript calculator for performing essential arithmetic operations.",                            img:"/projects_6.PNG", tags:["HTML","Node","CSS","TypeScript"] },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-3xl opacity-5" style={{ background:"radial-gradient(ellipse, #08E95E, transparent)" }} />
      </div>
      <div className="container mx-auto px-6 max-w-7xl">
        <Heading title="Projects" subtitle="— My Work —" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {projects.map((p,i) => (<Card key={p.id} {...p} index={i} />))}
        </div>
      </div>
    </section>
  );
}
