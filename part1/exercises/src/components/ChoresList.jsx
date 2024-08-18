// export default function ChoresList () {
//    return <p>No content is here!</p>;
// }




import React from 'react';
import classes from './ChoresList.module.css';

class ChoresList extends React.Component {
   render() {
      const chores = ["Take out trash", "Wash the dishes"];
      return (  
      <div>
         <h3 className = {classes.choresHeading}>Chores to Finish</h3>
         <ol>
            <li className={classes.choresText}>{chores[0]}</li>
            <li className={classes.choresText}>{chores[1]}</li>
         </ol>
      </div>
      );
   }
}

export default ChoresList;



//    render() {
//       const movies = ["Pride and Prejudice", "Howl's Moving Castle"];
//       return (
//       <div>
//          <h3 className = {classes.movieHeading}>Movies I Watched This Month</h3>
//          <ol>
//             <li className={classes.movieText}>{movies[0]}</li>
//             <li className={classes.movieText}>{movies[1]}</li>
//          </ol>
//       </div>
//       );
//    }
// }

// export default MovieList;