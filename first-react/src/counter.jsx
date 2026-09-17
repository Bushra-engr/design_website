import { useState } from "react";

const Counter = () => {
    const [count,setval] = useState(0)

    const changeA = ()=>{
        setval(count+1);
    }
    const changeB = ()=>{
        if(val<=0){
            setval(0);
        }
        else{
            setval(count-1)
        }
    }
    
  return (
    <div> 
      <h1>Count:{count}</h1>
      <div className="grp">
      <button className="inc" onClick={changeA}>+</button>
      <button className="dec" onClick={changeB}>-</button>

      </div>
    </div>
  
  )
}

export default Counter