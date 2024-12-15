import React from "react";
import styles from "./App.module.css";
import Header from "./components/Header.jsx";
import PlaceHolder from "./components/placeHolder.jsx";
import Contact from "./components/Contact.jsx";
import Form from "./components/form.jsx";


function App() {
    return (
        <div className={styles.fullpage}>
          <Header />
          <PlaceHolder />
          <Contact />
          <Form />
        </div>
    );
}

export default App;