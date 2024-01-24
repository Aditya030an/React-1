import React, { useState } from 'react'

const Counter = () => {
    const [count , setcount] = useState(0);
    function decrement(){
        const num = count-1;
        setcount(num);
    }
    function increment(){
        const num = count+1;
        setcount(num);
    }
    function reset(){
        setcount(0);
    }
  return (
    <>
    <div className='container'>
        <div className="heading">
            Increment and Decrement
        </div>
        <div className="button">
            <button className='decremet' onClick={decrement}>-</button>
            <div id="counter">{count}</div>
            <button className='increment' onClick={increment}>+</button>
        </div>
        <div>
            <button onClick={reset} className='reset'>Reset</button>
        </div>
    </div>
    </>
  )
}

export default Counter
