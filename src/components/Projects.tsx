import React from 'react';
import './Projects.css';

const data = [
    {
      id: 0,
      title: "Todo List",
      desc: "A React & Typescript based app for managing and organizing your tasks efficiently.",
      img: "/projects_1.png",
      tags: ["React", "Node", "CSS", "Typescript"],
  },
  {
      id: 1,
      title: "Countdown Timer",
      desc: "A Next.js and Typescript powered website to track time with an interactive countdown feature.",
      img: "/projects_2.png",
      tags: ["Next.JS", "Node", "CSS", "Typescript"],
  },
  {
      id: 2,
      title: "Weather Widget",
      desc: "A Next.js and Typescript based tool for fetching and displaying real-time weather data.",
      img: "/projects_3.png",
      tags: ["Next.JS", "Node", "CSS", "Typescript"],
  },
  {
      id: 3,
      title: "Currency Converter Project",
      desc: "A simple HTML and Typescript powered tool for converting currencies with real-time rates.",
      img: "/projects_4.png",
      tags: ["HTML", "Node", "CSS", "Typescript"],
  },
  {
      id: 4,
      title: "Static Interactive Resume",
      desc: "A Typescript-based interactive resume built with HTML and CSS, allowing users to showcase their skills dynamically.",
      img: "/projects_5.png",
      tags: ["HTML", "Node", "CSS", "Typescript"],
  },
  {
      id: 5,
      title: "Simple Calculator Project ",
      desc: "A basic HTML CSS and Typescript calculator for performing essential arithematic operations.",
      img: "/projects_6.png",
      tags: ["HTML", "Node", "CSS", "Typescript"],
  },
  ];

  const Projects = () => {
      return (    
      <section className="projects-section">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-container">
      {data.map((project) => (
          <div className="project-card" key={project.title} data-aos="zoom-in-up">
            <img className="project-image" src={project.img} alt={project.title} />
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span className="project-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;





































// import React from 'react';
// import './Projects.css';

// const data = [
//   {
//     id: 0,
//     title: "Todo List",
//     desc: "A React & Typescript based app for managing and organizing your tasks efficiently.",
//     img: "/projects_1.png",
//     tags: ["React", "Node", "CSS", "Typescript"],
// },
// {
//     id: 1,
//     title: "Countdown Timer",
//     desc: "A Next.js and Typescript powered website to track time with an interactive countdown feature.",
//     img: "/projects_2.png",
//     tags: ["Next.JS", "Node", "CSS", "Typescript"],
// },
// {
//     id: 2,
//     title: "Weather Widget",
//     desc: "A Next.js and Typescript based tool for fetching and displaying real-time weather data.",
//     img: "/projects_3.png",
//     tags: ["Next.JS", "Node", "CSS", "Typescript"],
// },
// {
//     id: 3,
//     title: "Currency Converter Project",
//     desc: "A simple HTML and Typescript powered tool for converting currencies with real-time rates.",
//     img: "/projects_4.png",
//     tags: ["HTML", "Node", "CSS", "Typescript"],
// },
// {
//     id: 4,
//     title: "Static Interactive Resume",
//     desc: "A Typescript-based interactive resume built with HTML and CSS, allowing users to showcase their skills dynamically.",
//     img: "/projects_5.png",
//     tags: ["HTML", "Node", "CSS", "Typescript"],
// },
// {
//     id: 5,
//     title: "Simple Calculator Project ",
//     desc: "A basic HTML CSS and Typescript calculator for performing essential arithematic operations.",
//     img: "/projects_6.png",
//     tags: ["HTML", "Node", "CSS", "Typescript"],
// },
// ];






// const Projects = () => {
//   return (
//     <div className="projects-container">
//       {data.map((project) => (
//         <div key={project.id} className="project-card">
//           <h3 className="project-title">{project.title}</h3>
//           <p>{project.desc}</p>
//           {project.img}
//           {project.tags}
          
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Projects;
