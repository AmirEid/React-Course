import React from "react";
import styles from "./Navbar.module.css";
//always use styles
const Navbar = () => {
    return (
        <header className={styles.header} >
            <nav className={styles.nav} >
                <img src="./src/assets/react.svg" alt="logo" className={styles.image} />
                <span className={styles.title} >ReactFacts</span>
            </nav>
        </header>
    );
}

export default Navbar;