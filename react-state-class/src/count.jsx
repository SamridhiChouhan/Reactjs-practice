import { useState } from 'react';

function Count() {
    let [count,setCount] = useState(0);
    // console.log(`Count : ${count}`)


  let increaseCount = ()=>{
    setCount(count+1);
    // console.log(count);
  }


  return (
    <>
    <h1>This is count variable</h1>
    <p>COUNT = {count}</p>
    <button onClick={increaseCount}>Increase count</button>
    </>
  )
}

export default Count