import React from 'react';
import Joke from './components/jokesComp.jsx';
import styles from './components/jokesComp.module.css';
import jokesData from './jokesData.js';

function App() {
    const jokesElements = jokesData.map((joke) => {
        return (
          < Joke
            key = {joke.id}
            setup = {joke.setup}
            punchline = {joke.punchline}
            isPun = {true}
            rating = {5}
            comments={[
              {author: "jojo1980", text: "Hello darkness my old friend"},
              {author: "jimmy", text: "I don't get it"}
            ]}
          />
        );
    })
    return (
      <div className={styles.whole}>
        {jokesElements}
      </div>
    );
}


// function App() {
//     return (
//         <div className={styles.whole}>
//             <Joke 
//               setup = "I got my daughter a fridge for her birthday"
//               punchline = "I can't wait to see her face light up when she opens it"
//               isPun = {true}
//               rating = {5}
//               comments={[
//                 {author: "jojo1980", text: "Hello darkness my old friend"},
//                 {author: "jimmy", text: "I don't get it"}
//               ]}
//             />
//             <Joke 
//               setup = "How did the hacker escape the police?"
//               punchline = "He just ransomware!"
//               isPun = {false}
//               rating = {0}
//             />
//             <Joke 
//               setup = "Why don't pirates travel on mountain roads?"
//               punchline = "Scurvy"
//               rating = {0}
//             />
//             <Joke 
//               setup = "Why do bees stay in the hive in the winter?"
//               punchline = "Swarm"
//               rating = {0}
//             />
//             <Joke 
//               setup = "What's the best thing about Switzerland?"
//               punchline = "I don't know, but the flag is a big plus"
//               rating = {0}
//             />
//         </div>
//     );
// }

export default App;