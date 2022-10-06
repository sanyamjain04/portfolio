import React, { useState } from "react";
import "./projects.css";

const Projects = () => {
  const projects = {
    Projects: [
      {
        name: "Youtube Clone",
        date: "September, 2022",
        desc: "A Youtube clone build where you can search youtube videos, open any channel and watch any youtube video.",
        projectLink: "https://sanyam-youtube.netlify.app/",
        sourceCode: "https://github.com/sanyamjain04/youtube-clone",
        techStacks: ["ReactJs", "TailwindCSS", "rapidAPI"],
      },
      {
        name: "Hulu Clone",
        date: "August, 2022",
        desc: "It is a Web App where user get  search the Movies by their genre. It is fetching the movie data from Movie API",
        projectLink: "https://sanyamhulu.netlify.app/",
        sourceCode: "https://github.com/sanyamjain04/hulu-clone",
        techStacks: ["NextJS", "TailwindCSS", "tmdbAPI"],
      },
      {
        name: "Real-estate-project",
        date: "July, 2022",
        desc: "A Real estate Buying and Renting Website. It fetches The data from RAPID API and show the user different properties.",
        projectLink: "https://real-estate-project-lake.vercel.app/",
        sourceCode: "https://github.com/sanyamjain04/Real-estate-project",
        techStacks: ["NextJS", "Chakra UI", "rapidApi"],
      },
      {
        name: "Fudomato Project",
        date: "July, 2022",
        desc: "An online food ordering web app. Tech stack used ~ NextJS for Frontend and sanity for Backend.",
        projectLink: "https://fudomart.netlify.app/",
        sourceCode:
        "https://github.com/sanyamjain04/Fudomart---an-online-food-ordering-App",
        techStacks: ["NextJS", "Sanity"],
      },
      {
        name: "Social Media Project",
        date: "July, 2022",
        desc: "This is a Social Media Frontend Project. Made with ReactJS",
        projectLink: "https://sanyamjain04.github.io/Social-media-app/",
        sourceCode: "https://github.com/sanyamjain04/Social-media-app",
        techStacks: ["ReactJs", "Manitine"],
      },
      {
        name: " Movie-Search-app",
        date: "July, 2022",
        desc: "It is a Web App where we can search the Movies by their name and get the overview. It is fetching the movie data from Movie API",
        projectLink: "https://sanyamjain04.github.io/Movie-Search-app/",
        sourceCode: "https://github.com/sanyamjain04/Movie-Search-app",
        techStacks: ["HTML", "CSS", "Javascript"],
      },
    ],
  };
  const [project, setProject] = useState("Projects");
  const projectType = Object.keys(projects);
  // console.log(projects.Projects[0].techStacks);

  return (
    <div className="project-container">
      <div className="project-tag">
        {projectType.map((type) => {
          return (
            <button
              className="btn"
              style={{
                borderBottom: type === project ? "5px solid white" : "",
              }}
              key={type}
              onClick={() => setProject(type)}
            >
              {type}
            </button>
          );
        })}
      </div>
      <div className="projects">
        {projects[project].map((proj) => (
          <div className="project" key={proj.name}>
            <h1>{proj.name}</h1>
            <p className="date">{proj.date}</p>
            <p className="desc">{proj.desc}</p>
            {proj?.techStacks?.map((stack) => (
              <span key={stack} className="technology">
                {stack}
              </span>
            ))}
            <br />
            {/* <div className="project-btn"> */}
            <a href={proj.projectLink} rel="noreferrer" target="_blank">
              <button className="btn project-btn-child">Live Project</button>
            </a>
            <a href={proj.sourceCode} rel="noreferrer" target="_blank">
              <button className="btn project-btn-child">Source Code</button>
            </a>
            {/* </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
