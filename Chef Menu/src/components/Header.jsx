import styles from "./Header.module.css";
import React from "react";
import logo from "../assets/react.svg";

const Header = () => {
    return (
        <header className={styles.header}>
            <img 
            src={logo}
            alt="logo" 
            className={styles.image}
            />
            <span 
                className={styles.title}>
                Chef Amir
            </span>
        </header>
    );
}

export default Header;