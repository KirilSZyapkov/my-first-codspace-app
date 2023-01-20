import styles from "./contact.module.css";

export default function Contact(){
    return (
        <div className={styles.container}>
            <div style={{"text-align":"center"}}>
                <h2>Contact Us</h2>
                <p>Swing by for a cup of coffee, or leave us a message:</p>
            </div>
            <div className={styles.row}>
                <div className={styles.column}>
                    <img src="https://www.w3schools.com/w3images/map.jpg" style={{"width":"100%"}}/>
                </div>
                <div className={styles.column}>
                    <form className={styles.form_group} action="/action_page.php">
                        <label for="fname">First Name</label>
                        <input className={styles.inputs} type="text" id="fname" name="firstname" placeholder="Your name.."/>
                        <label for="lname">Last Name</label>
                        <input className={styles.inputs} type="text" id="lname" name="lastname" placeholder="Your last name.."/>
                        <label for="country">Country</label>
                        <select className={styles.selects} id="country" name="country">
                        <option value="australia">Australia</option>
                        <option value="canada">Canada</option>
                        <option value="usa">USA</option>
                        </select>
                        <label for="subject">Subject</label>
                        <textarea className={styles.textareas} id="subject" name="subject" placeholder="Write something.." style={{"height":"170px"}}></textarea>
                        <input className={styles.submit} type="submit" value="Submit"/>
                    </form>
                </div>
            </div>
        </div>
    )
}