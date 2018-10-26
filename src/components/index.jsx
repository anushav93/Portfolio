import React from "react";
import ReactTypingEffect from "react-typing-effect";

const IndexPage = () => {
  return (
    <div className="container page-content index-page text-center">
      <h1 className="my-auto">
        <ReactTypingEffect
          text={["Hello!!", "I develop beautiful solutions!!"]}
        />
        <br />
        I'm Anusha Ventrapragada, a Frontend Web Developer.
      </h1>
    </div>
  );
};

export default IndexPage;
