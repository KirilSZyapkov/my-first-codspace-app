import Link from 'next/link';
import styles from './login.module.css';

export default function Login(){
    return (
        <>
            <h2 style={{"textAlign":"center"}}>Login</h2>

            <form className={styles.form_container}>
                <div className={styles.imgcontainer}>
                    <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" className={styles.avatar}/>
                </div>
                
                <div className={styles.container}>
                    <label for="uname"><b>Username</b></label>
                    <input className={styles.user_name} type="text" placeholder="Enter Username" name="uname" required/>
                
                    <label for="psw"><b>Password</b></label>
                    <input className={styles.password} type="password" placeholder="Enter Password" name="psw" required/>
                        
                    <button className={styles.btn_element } type="submit">Login</button>
                    <label>
                    <input className={styles.checkbox} type="checkbox" checked="checked" name="remember"/> Remember me
                    </label>
                </div>
                
                <div className={styles.container} style={{"background-color":"#f1f1f1"}}>
                    <Link href='/'><button type="button" className={`${styles.cancelbtn} ${styles.btn_element}`}>Cancel</button></Link>
                    <span className={styles.psw}>Forgot <a href="#">password?</a></span>
                </div>
            </form>
        </>
    )
}