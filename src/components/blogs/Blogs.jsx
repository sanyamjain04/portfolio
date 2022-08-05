import React, { useState } from "react";
import "./blogs.css";

const blogs = [
  {
    id: "0",
    title: "How I decided to do something in Tech",
    date: "August 3, 2022",
    desc: "How I get to know about Programming and decided that I wanted to be a Full stack Developer",
    blog: "",
    bloglink: "projects ",
  },
  {
    id: "1",
    title: "My React Notes ",
    date: "August 5, 2022",
    desc: "In this blog, I am going to share 5 basic React Questions",
    blog: "",
    bloglink: "",
  },
];
const Blogs = () => {
  const [blogpost, setBlogpost] = useState("");

  return (
    <div className="blogs-container">
      <div className="blogs-container">
        <h1>Blogs</h1>
        <p>
          WITH LOVE FOR DEVELOPING COOL STUFF, I LOVE TO WRITE ABOUT MY JOURNEY
          .
        </p>
      </div>
      {blogpost === "0" ? (
        <div>
          <div className="blogs-section1">
            <div className="blog1">
              {/* {blogs.map((blog) => ( */}
              <div className="blogpost">
                <img
                  src="https://source.unsplash.com/random/1420x350/?programming,technology"
                  alt=""
                />
                <h1>{blogs[blogpost].title}</h1>
                <p className="date">{blogs[blogpost].date}</p>
                <h4>how I get to know about Programming.</h4>
                <p>
                  It was the pre-pandemic time. At that time I had completed my
                  class 10 board exams. One day, I was randomly scrolling
                  through my Youtube feed on my Father‘s phone and saw a video
                  on how to learn a language in 2 hours. and I was shocked how
                  can anyone learn a new language in just 2 hours. after
                  clicking the video I realized it was some computer language (
                  HTML ) that I could not understand what the guy was
                  explaining. But this is something new that I have not ever
                  seen before in my 10-year-student journey. so it was the first
                  time I see someone doing something other than gaming, music
                  downloading, and Paint. I was a shy, innocent boy who knew
                  nothing about these languages and other stuff. At that time I
                  don't have a personal smartphone and my mother was also used
                  to a keypad phone. So I don't get any time to use a smartphone
                  except at night and morning when my father was at home. when I
                  get the time to use phone, I mostly play Temple run or Subway
                  suffer like games. Yes, I love playing games (mobile games
                  mostly ).and yes Clash of Clan also. It was also my most liked
                  game.{" "}
                </p>
                <h4>My New Phone </h4>
                <p>
                  After 3 months, on 14 August 2020. I get a new smartphone and
                  wifi also as I and my big sister were facing issues attendings
                  online classes through one phone. This is the turning point of
                  my life I explored a lot in my First Term of class 11 through
                  phone and spending time online. This was a great year of my
                  life( you will know by reading the whole blog). I was playing
                  PUBG and other games with friends, skipping online classes,
                  watching movies and animes together, and a lot of other
                  things.{" "}
                </p>
                <h4>
                  Learning about Money, the Stock market, and Financial
                  Independence
                </h4>
                <p>
                  First Term exams were going on and I was searching for some
                  maths videos on youtube, I get to know about Aman Dattarwal (
                  an educator on Youtube who has two-three channels about
                  education at that time, Founder of Apni Kaksha now ). One day
                  Youtube recommended a free seminar video by Aman Dattarwal
                  (4-5 hours ) which was about Earning Money, Real Estate, Stock
                  Market, and achieving Financial Independence, reading Books at
                  an early age. It was a lot of learning at that moment. My
                  brain completely explodes. It completely changes the way I
                  live my life and also my youtube feed. It was a very
                  life-changing video for me. Now my daily life things like How
                  I spend my time changed in that month. Now instead of games
                  and watching movies, I started watching more learning videos
                  and podcasts and learning about How the Stock Market works and
                  exploring other things also at the same time. I was still
                  skipping online classes as my school teachers and the school
                  itself was very bad in terms of teaching and other curricular
                  activities. Now I have a little blur direction for myself But
                  Wait!! I still don't have any career plans ahead of what to do
                  in my life.{" "}
                </p>
                <h4>Building My First Webpage</h4>
                <p>
                  It was March 2021, I was studying from the same educator’s
                  video as class 11 final exams were going on and youtube again
                  suggested his other videos, one of them was related to coding.
                  suddenly that 2-hour video came into my mind. I was like let's
                  give it a shot. But I don’t becuz exams were going on. So I
                  decided that after exams I would try programming as I wanted
                  to see how websites are made. After exams were over and I got
                  some free time I downloaded a free course on Html and CSS from
                  udemy. after following the whole tutorial I build{" "}
                  <a
                    className="extralinks"
                    href="https://codepen.io/sanyam04/full/jOBWpaN"
                    target="_blank"
                    rel="noreferrer"
                  >
                    this
                  </a>{" "}
                  basic website on May 13 then I follow some other tutorials as
                  well.
                </p>
                <div>
                  <iframe
                    height="400"
                    style={{ width: "100%" }}
                    scrolling="no"
                    title="Software company webpage design"
                    src="https://codepen.io/sanyam04/embed/jOBWpaN?default-tab=result&theme-id=dark"
                    frameBorder="no"
                    loading="lazy"
                    allowtransparency="true"
                    allowFullScreen={true}
                  >
                    See the Pen{" "}
                    <a href="https://codepen.io/sanyam04/pen/jOBWpaN">
                      Software company webpage design
                    </a>{" "}
                    by SANYAM JAIN (
                    <a href="https://codepen.io/sanyam04">@sanyam04</a>) on{" "}
                    <a href="https://codepen.io">CodePen</a>.
                  </iframe>
                </div>
                <h4>
                  Finally decided that I wanted to be a Full stack Developer
                </h4>
                <p>
                  In September 2021, I was thinking about what to do in the
                  future I have 2 choices one is to something in Commerce and
                  the other one to do something in Tech as I was not from
                  Science Stream so I was afraid to pursue something in Tech. So
                  I thought I should ask someone from the tech community. I have
                  also subscribed to Varun Mayya. He had posted a video about
                  programming on his channel with Tanay. So on Sep 11, 2021, I
                  reached out to Tanay on his Twitter handle to ask him about
                  "Can A Non-CS students join Tech ?" and he said “Yes”. A
                  Non-CS student can pursue a career in tech. So here I am after
                  11 months writing a blog about my journey. I have full
                  confidence in myself that I can be a great developer in the
                  future.
                </p>
                <div>
                  <p>
                    This is the first blog I have ever written in my life. I am
                    not even a beginner at storytelling I hope you like it. I
                    also love this experience. Maybe in the future, I will write
                    more Blogs. Thank you for reading the blog. Do share your
                    thoughts with me about the Blog. Bye Have a nice day.
                  </p>
                </div>
              </div>
              {/* ))} */}
            </div>
          </div>
          <div className="otherBlogs">Check out my all Blogs</div>
        </div>
      ) : blogpost === "1" ? (
        <div>
          <div className="blogs-section1">
            <div className="blog1">
              {/* {blogs.map((blog) => ( */}
              <div className="blogpost">
                <img
                  src="https://source.unsplash.com/random/1420x300/?programming,technology"
                  alt=""
                />
                <h1>{blogs[blogpost].title}</h1>
                <p className="date">{blogs[blogpost].date}</p>
                <div>
                  <p>
                    Hello guys, Sanyam again here. Today I am sharing some of my
                    Notes on React Library. Let’s revise together.
                  </p>
                </div>
                <h3>What is React ?</h3>
                <p>
                  React is an open-sources front-end JavaScript library that is
                  used for building user interfaces, especially for single-page
                  applications. It is used for building user web and mobile
                  apps. react was created by Jordan Walke, a software engineer
                  working for Facebook.{" "}
                </p>
                <h3>What are the major features of React ?</h3>
                <p>
                  The major Features of React are :  It uses VirtualDOM
                  instead of RealDOM considering that RealDOM manipulations are
                  expensive.  Component-Based: We can make
                  reusable/composable UI components to develop the view.
                  Learn once, Write anywhere: We can use React in Building
                  Mobile Applications
                </p>
                <h3>What is JSX ?</h3>
                <p>
                  JSX is a XML like syntax extension to ECMAScript ( acronym
                  stands for javascript XML). JSX produces React "elements". We
                  can put JavaScript Expression inside the curly braces in JSX.
                </p>
                <h3>Difference between Elements and Components ?</h3>
                <p>
                  An element describes what you want to see on the screen.
                  Elements are immutable. Elements are the smallest building
                  blocks of React apps.
                </p>
                <p>
                  Components are like javaScript functions. but they accept
                  arbitrary inputs called “props” and return the React elements
                  describing what should appear on the screen.
                </p>
                <h3>What are props in React?</h3>
                <p>
                  Props are inputs to component. they are single values or
                  objects containing a set of values that are passed into
                  components. They are data passed down from a parent component
                  to a child component.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="otherBlogs">Check out my all Blogs</div>
        </div>
      ) : (
        ""
      )}

      <div>
        <div className="blog1">
          {blogs.map((blog) => (
            <div className="blog" key={blog.id}>
              <h1>{blog.title}</h1>
              <p className="date">{blog.date}</p>
              <p className="desc">{blog.desc}</p>
                         
                <button className="btn" onClick={() => setBlogpost(blog.id)}>
                  Read More
                </button>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
