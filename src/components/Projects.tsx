import React from 'react'
import Heading from './Heading';
import Card from './Card';

const data = [
  {
    id: 0,
    title: "Todo List",
    desc: "A React & Typescript based app for managing and organizing your tasks efficiently.",
    img: "/projects_1.PNG",
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
    img: "/projects_4.PNG",
    tags: ["HTML", "Node", "CSS", "Typescript"],
},
{
    id: 4,
    title: "Static Interactive Resume",
    desc: "A Typescript-based interactive resume built with HTML and CSS, allowing users to showcase their skills dynamically.",
    img: "/projects_5.PNG",
    tags: ["HTML", "Node", "CSS", "Typescript"],
},
{
    id: 5,
    title: "Simple Calculator Project ",
    desc: "A basic HTML CSS and Typescript calculator for performing essential arithematic operations.",
    img: "/projects_6.PNG",
    tags: ["HTML", "Node", "CSS", "Typescript"],
},
];

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
      <Heading title='Projects' />
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 flex flex-items-center'>
        {data.map((el) => (<Card
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
    </div>
  )
}

export default Projects
