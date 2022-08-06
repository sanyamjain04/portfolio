import React from 'react'


const Blog2 = () => {
  return (
    <div>
      <div className="blogs-section1">
        <div className="blog1">
          <div className="blogpost">
            <img
              src="https://source.unsplash.com/random/1420x300/?programming,technology"
              alt=""
            />
            <h1>My React Notes </h1>
            <p className="date">August 5, 2022</p>
            <div>
              <p>
                Hello guys, Sanyam again here. Today I am sharing some of my
                Notes on React Library. Let’s revise together.
              </p>
            </div>
            <h2>What is React ?</h2>
            <p>
              React is an open-sources front-end JavaScript library that is
              used for building user interfaces, especially for single-page
              applications. It is used for building user web and mobile
              apps. react was created by Jordan Walke, a software engineer
              working for Facebook.{" "}
            </p>
            <h2>What are the major features of React ?</h2>
            <p>
              The major Features of React are :  It uses VirtualDOM
              instead of RealDOM considering that RealDOM manipulations are
              expensive.  Component-Based: We can make
              reusable/composable UI components to develop the view.
              Learn once, Write anywhere: We can use React in Building
              Mobile Applications
            </p>
            <h2>What is JSX ?</h2>
            <p>
              JSX is a XML like syntax extension to ECMAScript ( acronym
              stands for javascript XML). JSX produces React "elements". We
              can put JavaScript Expression inside the curly braces in JSX.
            </p>
            <h2>Difference between Elements and Components ?</h2>
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
            <h2>What are props in React?</h2>
            <p>
              Props are inputs to component. they are single values or
              objects containing a set of values that are passed into
              components. They are data passed down from a parent component
              to a child component.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  ) 
  
}

export default Blog2