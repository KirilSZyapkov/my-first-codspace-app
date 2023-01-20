import styles from "./about.module.css"

export default function About(){

    return (
        <>
        <div className={styles.about_section}>
            <h1>About Us Page</h1>
            <p>Some text about who we are and what we do.</p>
            
        </div>

        <h2 style={{"text-align":"center"}}>Our Team</h2>
        <div className={styles.row}>
        <div className={styles.column}>
            <div className={styles.card}>
            <img src="https://www.w3schools.com/w3images/team1.jpg" alt="Jane" style={{"width":"100%"}}/>
            <div className={styles.container}>
                <h2>Jane Doe</h2>
                <p className={styles.title}>CEO & Founder</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>jane@example.com</p>
                <p><button className={styles.button}>Contact</button></p>
            </div>
            </div>
        </div>

        <div className={styles.column}>
            <div className={styles.card}>
            <img src="https://www.w3schools.com/w3images/team2.jpg" alt="Mike" style={{"width":"100%"}}/>
            <div className={styles.container}>
                <h2>Mike Ross</h2>
                <p className={styles.title}>Art Director</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>mike@example.com</p>
                <p><button className={styles.button}>Contact</button></p>
            </div>
            </div>
        </div>
        
        <div className={styles.column}>
            <div className={styles.card}>
            <img src="https://www.w3schools.com/w3images/team3.jpg" alt="John" style={{"width":"100%"}}/>
            <div className={styles.container}>
                <h2>John Doe</h2>
                <p className={styles.title}>Designer</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>john@example.com</p>
                <p><button className={styles.button}>Contact</button></p>
            </div>
            </div>
        </div>
        </div>
</>
    )
}