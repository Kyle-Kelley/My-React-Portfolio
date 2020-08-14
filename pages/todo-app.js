import React from 'react';
import TodoApp from '../components/TodoApp';

const Todo = () => {
    return(
        <div>
            <h1>
                <TodoApp />
            </h1>
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

export default Todo;