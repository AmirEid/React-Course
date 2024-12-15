import styles from './contact.module.css';
import { useState } from 'react';
import img1 from '../assets/react.svg';
import img2 from '../assets/vite.svg'

const Contact = () => {
    const [contact, setContact] = useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true
    });
    
    let img = contact.isFavorite ? img1 : img2;
    
    function handleClick() {
        setContact(prev => {
            return {
                ...prev,
                isFavorite: !prev.isFavorite
            };
        });
    }


    return (
        <div className={styles.card}>
            <img src="../src/assets/fam1.jpg" className={styles.img}/>
            <div>
                <button className={styles.button}>
                <img
                    onClick={handleClick}
                    src={img} 
                    className={styles.react}
                    alt={contact.isFavorite ? "favorite" : "not favorite"}
                />
                </button>
                <h3 className={styles.h3}>
                    {contact.firstName} {contact.lastName}
                    </h3>
                <p className={styles.p}>{contact.phone}</p>
                <p className={styles.p}>{contact.email}</p>
            </div>
        </div>
    );
}

export default Contact;