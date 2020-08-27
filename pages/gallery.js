import React from "react";
import ImgContainer from "../components/ImgContainer";

const Gallery = () => {
  return (
    <div>
      <h1>Pictures of me!</h1>
      <ImgContainer />
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          @import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap");
          font-family: "Permanent Marker", cursive;
        }
        h1 {
          text-align: center;
          font-size: 70px;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default Gallery;
