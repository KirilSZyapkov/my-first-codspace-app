import { useState } from 'react'; 

import Task from '../components/Task';
import styles from './index.module.css';

let tasks = [];

function Home() {
  
  
 const [data, setData] = useState(tasks);

  
  function newElement(e){
    e.preventDefault();
    const target = e.target;
    const text = target.text.value.trim();
    if (text === '') {
      
      return alert("Please enter a task!");
    } else {
     setData(prevData=> (
      [...prevData, {_id: Math.random()*1000, text}]
     ))
    }
    target.text.value = '';
  };
    
  function dellTask(id, e){
    e.stopPropagation();
    setData(prevData => (
      prevData.filter(t=> t._id !== id)
    ))
  }

    return (
      <div className={styles.app_container}>
        <div id="myDIV" className={styles.header}>
          <h2 style={{"margin":"5px"}}>My To Do List</h2>
          <form onSubmit={newElement}>
            <input className={styles.inputs} type="text" id="myInput" name='text' placeholder="Title..."/>
            <button type='submit' className={styles.addBtn}>Add</button>
          </form>
        </div>
      
        <ul className={styles.uls} id="myUL">
            {data.map(task => <Task key={task._id} {...task} dellTask={dellTask} />)}
       </ul>
     </div>
  )
}

export default Home
