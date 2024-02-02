import React,{useState,useMemo} from 'react'

const Counter = () => {
  const [counterOne, setCounterOne] = useState(0)
  const [counterTwo, setCounterTwo] = useState(0)

  const incrementOne=() =>{
    setCounterOne(counterOne +1)
  }
  const incrementTwo=() =>{
    setCounterTwo(counterTwo +1)
  }

  const isEven=useMemo(()=>{
      let i=0
      while(i<2000000000) i++; //simulo una tarea pesada -> tarada 1 o 2 segundos
      return counterOne % 2 ===0
    },[counterOne])


  return (
    <div>
      <div>
        <button onClick={incrementOne}>Count one - {counterOne}</button>
        <span>{isEven()?' Even':' Odd'}</span>
      </div>
      <div>
        <button onClick={incrementTwo}>Count two - {counterTwo}</button>
      </div>
    </div>
  )
}

export default Counter