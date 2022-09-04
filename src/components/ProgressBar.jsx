import React from "react";

const ProgressBar = ({ bgcolor, parentbgcolor,progress, height }) => {
  const Parentdiv = {
    height: height,
    width: "100%",
    borderRadius: 40,
    backgroundColor: parentbgcolor,

    // margin: 50
  };

  const Childdiv = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: bgcolor,
    borderRadius: 40,
    textAlign: "right",
  };

  return (
    <div style={Parentdiv}>
      <div style={Childdiv}></div>
    </div>
  );
};

export default ProgressBar;
