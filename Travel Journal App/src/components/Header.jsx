import React from "react";
import styles from "./Header.module.css";

const Header = () => {
    return (
        <header className={styles.header} >
            <nav className={styles.nav}>
                <img src="./src/assets/react.svg" alt="logo" className={styles.image} />
                <span className={styles.span}>my travel journal</span>
            </nav>
        </header>
    );
};

export default Header;