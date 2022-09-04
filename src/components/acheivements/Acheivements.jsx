import React from "react";
import "./acheivement.css";
import { TwitterTweetEmbed } from "react-twitter-embed";
import { useEffect } from "react";
import { useState } from "react";
import ProgressBar from "../ProgressBar";

const Acheivements = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    fetch("https://leetcode-stats-api.herokuapp.com/sanyamjain04")
      .then((resp) => resp.json())
      .then((data) => setData(data));
  }, []);

  const {
    totalSolved,
    totalEasy,
    easySolved,
    totalMedium,
    mediumSolved,
    totalHard,
    hardSolved,
  } = data;
  return (
    <div className="acheivement-section">
      {
        <div className="leetcode">
          <p>LeetCode Stats :</p>
          <span className="total">Total Question Solved : {totalSolved}</span>
          <span className="easy">
            Total Easy Question Solved : {easySolved}
          </span>
          <ProgressBar
            bgcolor="seagreen"
            parentbgcolor="#2cbb5d40"
            progress={(easySolved / totalEasy) * 100}
            height={10}
          />
          <span className="medium">
            Total Medium Question Solved : {mediumSolved}
          </span>
          <ProgressBar
            bgcolor="orange"
            parentbgcolor="#ffc01e40"
            progress={(mediumSolved / totalMedium) * 100}
            height={10}
          />
          <span className="hard">
            Total Hard Question Solved : {hardSolved}
          </span>
          <ProgressBar
            bgcolor="red"
            parentbgcolor="#ef474340"
            progress={(hardSolved / totalHard) * 100}
            height={10}
          />
        </div>
      }
      <div className="tweet-section">
        <p>
          I explained the CSS topic - Flex-direction in a thread and it got more
          than 40,000 views.{" "}
        </p>
        <div className="tweet">
          <TwitterTweetEmbed
            backgroundColor="rgba(0, 0, 0)"
            tweetId={"1557571159348355072"}
          />
        </div>
        {/* <img src="https://ghchart.rshah.org/sanyamjain04" alt="2016rshah's Github chart" /> */}
      </div>
    </div>
  );
};

export default Acheivements;
