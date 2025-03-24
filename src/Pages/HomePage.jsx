import React, { useState,useEffect, useContext } from 'react'
import CardList from '../Components/CardList'
// import { ThemeContext } from '../hooks/ThemeContext';

const HomePage = ({data}) => {
  // const data = data
    console.log("In cardList component",data);
  const newData = data
      // const [newData, setData] = useState([])
  
      useEffect(()=>{
        // setData(data);
      })
  return (
    <>
    <div>
    
    <CardList data ={newData}/>
    </div>
    
    </>
  )
}

export default HomePage