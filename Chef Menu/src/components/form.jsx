import styles from "./form.module.css"; 
import React from "react";

function Form() {
    //this is the old way of handling form submission
    function handleSubmit(event) {
        event.preventDefault();
        const formElement = event.currentTarget;
        const formData = new FormData(formElement);
        // or to get them all at once: const object = Object.formEntries(formData);
        const email = formData.get("email");
        const password = formData.get("password");
        const choice = formData.get("choice");
        alert(`Email: ${email},Password: ${password},Choice: ${choice}`);
        formElement.reset();
    }
    // geting the choice wont work, we need to use value attribute in the input tag
    // function handleSubmit(formData) {
    //     const email = formData.get("email");
    //     const password = formData.get("password");
    //     alert(email, password);
    // }



    return (
        <section className={styles.form}> 
            <h1 className={styles.h1}>Signup form</h1>
            <form className={styles.formform} onSubmit={handleSubmit}>
                <label>Email:
                <input type="email" name="email" placeholder="hell@email.com"/>
                </label>
                <br />
                <label htmlFor="password">Password:</label>
                <input id="password" type="password" name="password" placeholder="password"/>
                <fieldset>
                    <legend> Choices</legend>
                    <label>
                        <input type="radio" name="choice" value="unemployed"/>
                        Unemployed
                    </label>
                    <label>
                        <input type="radio" name="choice" value="employed"/>
                        Employed
                    </label>
                    <label>
                        <input type="radio" name="choice" value="student"/>
                        Student
                    </label>
                </fieldset>
                <button>Submit</button>
            </form>
        </section>
    );
}

export default Form;