import React from "react";
import styles from "./Main.module.css";

const Main = () => {
    return (
        <main className={styles.main}>
            <h1 className={styles.h1}>Fun Facts about React</h1>
            <ul className={styles.ul}>
                <li> was first released in 2013 </li>
                <li> bla bla bla bla </li>
                <li> hello darkness my old friend </li>
            </ul>
        </main>
    );
}

export default Main;