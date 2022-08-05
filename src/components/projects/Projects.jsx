import React, { useState } from "react";
import "./projects.css";

const projects = {
  Mark15: [
    {
      name: "CLI quiz app ",
      date: "August, 2022",
      desc: "A CLI app built with nodeJS. ",
      projectLink:
        "https://replit.com/@sanyam04/CLI-quiz-app-India-Quiz?embed=1?output=1",
      sourceCode: "https://github.com/neogcamp/build-profit-or-loss",
    },
    {
      name: "CLI General Knowledge App",
      date: "August, 2022",
      desc: "A CLI app built with nodeJS. ",
      projectLink:
        "https://replit.com/@sanyam04/CLI-General-Knowledge-Quiz-App?embed=true%3Eoutput%3D1",
      sourceCode: "https://github.com/sanyamjain04/CLI-general-question-quiz",
    },
    {
      name: "Minionese",
      date: "August, 2022",
      desc: "Are you a fan of minions? Did you know that the gibberish they say is an actual language. Use the translator to convert your text from English to Minion speak or Banana language.",
      projectLink: "https://banana-talk-marksix.netlify.app/",
      sourceCode: "https://github.com/sanyamjain04/Neog-MarkSix",
    },
    {
      name: "Groot Talk",
      date: "August, 2022",
      desc: "Did you know that the gibberish he say is an actual language. Use the translator to convert your text from English to Groot speak or Groot language.",
      projectLink: "https://groot-talk-mark7.netlify.app/",
      sourceCode: "https://github.com/sanyamjain04/Neog-mark7",
    },
    {
      name: "Emoji Interpreter",
      date: "August, 2022",
      desc: "A Emoji Interpreter. select the Emoji and know the meaning of it",
      projectLink: "https://ef4f9x.csb.app/",
      sourceCode:
        "https://github.com/sanyamjain04/Neog-Mark-8-Emoticon-interpreter",
    },
    {
      name: "📚 GoodBooks",
      date: "August, 2022",
      desc: "Checkout my favourite books. Select the genre to get started.",
      projectLink: "https://6dyr09.csb.app/",
      sourceCode: "https://github.com/sanyamjain04/Neog-Mark9-Bookreads",
    },
    {
      name: "Cash Register",
      date: "August, 2022",
      desc: "Enter the bill amount and cash given by the customer and know minimum number of notes to return.",
      projectLink: "https://cash-register-app-mark-10.netlify.app/",
      sourceCode: "https://github.com/sanyamjain04/neog-mark10-cash-register",
    },
    {
      name: "Is your Birthday Lucky?",
      date: "August, 2022",
      desc: "A website which can help you to check whether your birthday is lucky or not.",
      projectLink: "https://birthdate-lucky-app.netlify.app/",
      sourceCode:
        "https://github.com/sanyamjain04/Neog-Mark11--birthdate-lucky",
    },
    {
      name: "Do you know Triangles?",
      date: "August, 2022",
      desc: "A website which helps you to learn about triangle.",
      projectLink: "https://ubftni.csb.app/",
      sourceCode: "https://codesandbox.io/s/fun-with-triamgle-ubftni",
    },
    {
      name: "Palindrome Birthday",
      date: "August, 2022",
      desc: "App which checks whether your birthday is a palindrome birthday or not.",
      projectLink: "https://birthday-palindrome-app-neog13.netlify.app/",
      sourceCode: "https://github.com/sanyamjain04/Birthday-palindrome",
    },
    {
      name: "Profit or loss calculator",
      date: "August, 2022",
      desc: "A website which helps user how much profit or loss he/she is making in percentage & absolute value.",
      projectLink: "https://profit-loss-app-sanyam.netlify.app/",
      sourceCode: "https://github.com/sanyamjain04/Profit-and-loss-app",
    },
  ],
  OtherProjects: [
    {
      name: "",
      date: "August, 2022",
      desc: "",
      projectLink: "",
      sourceCode: "",
    },
  ],
};
const Projects = () => {
  const [project, setProject] = useState("Mark15");

  return (
    <div className="project-container">
      <div className="project-tag">
        <button className="btn" onClick={() => setProject("Mark15")}>
          Mark15
        </button>
        <button className="btn" onClick={() => setProject("OtherProjects")}>
          Other Projects
        </button>
      </div>
      <div className="projects">
        {projects[project].map((proj) => (
          <div className="project" key={proj.name}>
            <h1>{proj.name}</h1>
            <p className="date">{proj.date}</p>
            <p className="desc">{proj.desc}</p>
            <a href={proj.projectLink} rel="noreferrer" target="_blank">
              <button className="btn">Live Project</button>
            </a>
            <a href={proj.sourceCode} rel="noreferrer" target="_blank">
              <button className="btn">Source Code</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
