import { useState } from "react";

import styles from "./Task.module.css";

export default function Task({_id, text, dellTask}){
    const [isChecked, setIsChecked] = useState(false);

    function toggleCheck(){
        setIsChecked(!isChecked);
    }


    return (
        <div className={styles.task_container}>
            <li className={`${isChecked ? `${styles.checked}` : ''} ${styles.task_el}`} onClick={toggleCheck}>{text}</li> 
            <div className={styles.btn_container}>
                <button className={styles.btn_dell} onClick={(e)=> dellTask(_id, e)}>X</button>
            </div>
        </div>
    )
}