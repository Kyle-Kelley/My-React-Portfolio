import Head from 'next/head';


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>My Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet" />
      </Head>

      <main>
        <h1 className='name'>Kyle Kelley</h1>
        <h2 className='devTitle'>React Developer</h2>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: 
        }
        .name {
          font-size: 95px;
          font-family: 'Permanent Marker', cursive;
          letter-spacing: 2px;
          margin: 40px;
        }
        .devTitle {
          font-size: 45px;
          font-family: 'Permanent Marker', cursive;
          letter-spacing: 2px;
          margin: 15px;
        }
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          background: linear-gradient(90deg, #69b7eb, #b3dbd3, #f4d6db);
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
