import React, { useState } from "react";
import "./projects.css";

const Projects = () => {
  const projects = {
    Mark15: [
      {
        name: "CLI Quiz app ",
        date: "August, 2022",
        desc: "A CLI app built with nodeJS. This Quiz contains some common question about our Country India. ",
        projectLink:
          "https://replit.com/@sanyam04/CLI-quiz-app-India-Quiz?embed=1?output=1",
        sourceCode: "https://github.com/sanyamjain04/CLI-quiz-app",
        techStacks: ["NodeJs", "CLI Tool"],
      },
      {
        name: "CLI General Knowledge Quiz App",
        date: "August, 2022",
        desc: "A CLI app built with nodeJS.This Quiz contains some common question about General Knowledge. ",
        projectLink:
          "https://replit.com/@sanyam04/CLI-General-Knowledge-Quiz-App?embed=true%3Eoutput%3D1",
        sourceCode: "https://github.com/sanyamjain04/CLI-general-question-quiz",
        techStacks: ["NodeJs", "CLI Tool"],
      },
      {
        name: "Minionese",
        date: "August, 2022",
        desc: "Are you a fan of minions? Did you know that the gibberish they say is an actual language. Use the translator to convert your text from English to Minion speak or Banana language.",
        projectLink: "https://banana-talk-marksix.netlify.app/",
        sourceCode: "https://github.com/sanyamjain04/Neog-MarkSix",
        techStacks: ["HTML", "CSS", "Javascript", "API"],
      },
      {
        name: "Groot Talk",
        date: "August, 2022",
        desc: "Are you a fan of minions? Use the translator to convert your text from English to Groot speak or Groot language.",
        projectLink: "https://groot-talk-mark7.netlify.app/",
        sourceCode: "https://github.com/sanyamjain04/Neog-mark7",
        techStacks: ["HTML", "CSS", "Javascript", "API"],
      },
      {
        name: "😄 Emoji Interpreter",
        date: "August, 2022",
        desc: "A Emoji Interpreter. select the Emoji and know the meaning of it",
        projectLink: "https://ef4f9x.csb.app/",
        sourceCode:
          "https://github.com/sanyamjain04/Neog-Mark-8-Emoticon-interpreter",
        techStacks: ["ReactJS"],
      },
      {
        name: "📚 GoodBooks",
        date: "August, 2022",
        desc: "Checkout my favourite books. Select the genre to get started.",
        projectLink: "https://6dyr09.csb.app/",
        sourceCode: "https://github.com/sanyamjain04/Neog-Mark9-Bookreads",
        techStacks: ["ReactJS"],
      },
      {
        name: "💵 Cash Register",
        date: "August, 2022",
        desc: "Enter the bill amount and cash given by the customer and know minimum number of notes to return.",
        projectLink: "https://cash-register-app-mark-10.netlify.app/",
        sourceCode: "https://github.com/sanyamjain04/neog-mark10-cash-register",
        techStacks: ["HTML", "CSS", "Javascript"],
      },
      {
        name: "🎰 Is your Birthday Lucky?",
        date: "August, 2022",
        desc: "A website which can help you to check whether your birthday is lucky or not.",
        projectLink: "https://birthdate-lucky-app.netlify.app/",
        sourceCode:
          "https://github.com/sanyamjain04/Neog-Mark11--birthdate-lucky",
        techStacks: ["HTML", "CSS", "Javascript"],
      },
      {
        name: "🔺Do you know Triangles?",
        date: "August, 2022",
        desc: "A website which helps you to learn about triangle.",
        projectLink: "https://ubftni.csb.app/",
        sourceCode: "https://github.com/sanyamjain04/Fun-with-triangles",
        techStacks: ["ReactJS"],
      },
      {
        name: "🎂 Palindrome Birthday",
        date: "August, 2022",
        desc: "App which checks whether your birthday is a palindrome birthday or not.",
        projectLink: "https://birthday-palindrome-app-neog13.netlify.app/",
        sourceCode: "https://github.com/sanyamjain04/Birthday-palindrome",
        techStacks: ["HTML", "CSS", "Javascript"],
      },
      {
        name: "💰 Profit or loss calculator",
        date: "August, 2022",
        desc: "A website which helps user how much profit or loss he/she is making in percentage & absolute value.",
        projectLink: "https://profit-loss-app-sanyam.netlify.app/",
        sourceCode: "https://github.com/sanyamjain04/Profit-and-loss-app",
        techStacks: ["HTML", "CSS", "Javascript"],
      },
    ],
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
