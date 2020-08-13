import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';


const Projects = () => {
    return(
        <div>
            <h1>projects!</h1>
            <Container maxWidth='md'>
            <Typography 
                component="div" 
                style={{ 
                  backgroundColor: '#b3dbd3',
                  height: '90vh',
                  border: '2px solid orange',
                  borderRadius: '10px'
                  }}>
              <h1>
                <Link href='/todo-app'>
                  TodoApp
                </Link>
              </h1>
            </Typography>
            </Container>
        <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');
          font-family: 'Permanent Marker', cursive;;
        }
        h1 {
          font-size: 70px;
          text-align: center;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
        </div>
        
    )
}

export default Projects;