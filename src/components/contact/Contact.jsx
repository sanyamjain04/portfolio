import profileImg from "../../assets/SanyamJain.jpg";
import React from "react";
import "./contact.css";
import SocialMedia from "../socialmedia/SocialMedia";

function Contact() {
  return (
    <div className="bigcontact" id="contact">
            <h1>Connect With Me!</h1>
      <div className="contact">
        <div className="container-f">
          
          <div className="bio-heading">
            <p>
              DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL
            </p>
          </div>
          <div className="profileBio">
            <h2>"18 | Sanyam Jain | Loves to Build Web Applications </h2>
          </div>
          <div className="location">
            <span>
              <svg
                viewBox="-0.5 -2 20 19"
                version="1.1"
                width="22"
                height="16"
                aria-hidden="true"
                stroke="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"
                ></path>
              </svg>{" "}
              New Delhi, India
            </span>
          </div>
        </div>
        <div className="img">
          <img  src={profileImg} width={150} alt="" />
        </div>
      </div>
      <SocialMedia />

      <div >
      <p>Made with ❤️ by Sanyam Jain</p>
      </div>
        
    </div>
  );
}

export default Contact;
