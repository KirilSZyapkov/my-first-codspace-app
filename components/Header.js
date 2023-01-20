import Link from "next/link";
import styles from './Header.module.css';

export default function Header(){
    return (
        <div className={styles.navbar}>
        <Link href="/">Home</Link>
        <Link href="/about"> About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/login">Login</Link>
        <div className = {styles.search_container}>
            <form>
                <input type="text" placeholder="Search.." name="search"/>
                <button type="submit">Search</button>
            </form>
         </div>
      </div>
    )
}