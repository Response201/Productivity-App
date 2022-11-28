import React from 'react'

export const PageFour = ({setWhat, setPriority}) => {
  return (
    <>
          
            
            <select onChange={(e) => setWhat(e.target.value)}>
              <option value="Feature">Feature</option>
              <option value="Bug">Bug</option>
              <option value="Database">Database</option>
            </select>
          
           
            <select onChange={(e) => setPriority(e.target.value)}>
              <option value="Low">Low</option>
              <option value="Moderate">Moderate</option>
              <option value="High">High</option>
              <option value="Critical">Critical</option>
            </select>
          
        </>
  )
}
