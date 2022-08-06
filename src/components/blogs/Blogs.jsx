import React, { useState } from "react";
import { Link } from "react-router-dom";
import Blog1 from "../blog/Blog1";
import "./blogs.css";

const blogs = [
  {
    id: "1",
    title: "How I decided to do something in Tech",
    date: "August 3, 2022",
    desc: "How I get to know about Programming and decided that I wanted to be a Full stack Developer",
    blog: "",
    bloglink: "projects ",
  },
  {
    id: "2",
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
      {/* {blogpost === "0" ? <Blog1 />  : blogpost === "1" ?  : (
        ""
      )} */}

      <div>
        <div className="blog1">
          {blogs.map((blog) => (
            <div className="blog" key={blog.id}>
              <h1>{blog.title}</h1>
              <p className="date">{blog.date}</p>
              <p className="desc">{blog.desc}</p>
                <Link to={blog.id} >
                <button className="btn" onClick={() => setBlogpost(blog.id)}>
                  Read More
                </button>
              
                </Link>         
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
