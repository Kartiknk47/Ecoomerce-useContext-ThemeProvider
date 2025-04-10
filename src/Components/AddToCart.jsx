import React, { useReducer, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const initialState = {count:0, name:''}

function reducer(state, action){
    switch (action.type) {
        case "INCREMENT":
            console.log(state)
            return{count:state.count+1};
        case "DECREMENT":
            console.log(state)
            return{count:state.count-1};
        case "ShowNameAndCount":
            return{...state,name:action.payload}

        default:
            return state;
    }
}
const CounterReducer = () => {
    const [nameInput, setNameInput] =useState('')
    const [state, dispatch] = useReducer(reducer,initialState)

    navigate = useNavigate("/card")

  return (
    <div>
        <p>Count:{state.count}</p>
        <p>Name:{state.name}</p>
        <button onClick={()=>dispatch({type: 'INCREMENT'})}>INCREMENT</button>
        <button onClick={()=>dispatch({type: 'DECREMENT'})}>DECREMENT</button>
        <input type='text'onChange={(e)=>setNameInput(e.target.value)}/>
        <button onClick={()=>dispatch({type:"ShowNameAndCount", payload:nameInput})}>Name</button>

    </div>
  )
}

export default CounterReducer