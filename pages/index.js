import React from "react";

export default function Home() {
  return (
    <div className="container">
      <main>
        <h1 className="name">Kyle Kelley</h1>
        <h2 className="devTitle">React Developer</h2>
      </main>
      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .name {
          font-size: 95px;
          font-family: "Permanent Marker", cursive;
          letter-spacing: 2px;
          text-align: center;
        }
        .devTitle {
          font-size: 45px;
          font-family: "Permanent Marker", cursive;
          letter-spacing: 2px;
          margin: 15px;
          text-align: center;
        }
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          @import url("https://fonts.googleapis.com/css2?family=Lexend+Zetta&display=swap");
          font-family: "Lexend Zetta", sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
