import React, {useState} from "react";
import styles from "./jokesComp.module.css";

const jokesComp = (props) => {
    const [rating, setRating] = useState(props.rating);
    const buttonClicked = () => {
        setRating(rating + 1);
    }
    return (
        <div className={styles.block}>   
            <h1 className={styles.h1}>Joke Setup</h1>
            <p className={styles.p}>{props.setup}</p>
            <h1 className={styles.h1}>Joke Punchline</h1>
            <p className={styles.p}>{props.punchline}</p>
            <button className={styles.button} onClick={buttonClicked}>Like</button>
            <p>Rating: {rating}</p>
            {(props.isPun || rating > 5) && <p className={styles.p}>This is a pun</p>}
            {props.comments && props.comments.map((comment, author) => {
                return (
                    <div key={author} className={styles.comment}>
                        <p>{comment.author}</p>
                        <p>{comment.text}</p>
                    </div>
                );
            }
            )}
        </div>
    );
};

export default jokesComp;