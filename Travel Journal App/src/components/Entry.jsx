import React from "react";
import styles from "./entry.module.css";

const Entry = (props) => {
    return (
        <div className={styles.MainBlock}>
            <div className={styles.block1}>
                <img 
                    src={props.img.src}
                    alt={props.img.alt} 
                    className={styles.img}
                />
            </div>
            <div className={styles.block2}>
                <div className={styles.subb1}>
                    <img src="../src/assets/react.svg" alt="logo" className={styles.icon} />
                    <span className={styles.subtitle}>{props.img.location}</span>
                    <a href={props.img.href} className={styles.link}>View on Google Maps</a>
                </div>
                <div className={styles.subb2}>
                    <h1 className={styles.h1}>{props.h1}</h1>
                    <small className={styles.date}>{props.date}</small>
                    <p className={styles.paragraph}>{props.paragraph}</p>
                </div>
            </div>
        </div>
    );
}

export default Entry;