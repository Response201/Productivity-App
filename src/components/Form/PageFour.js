import React from 'react'

export const PageFour = ({setWhat, setPriority}) => {
  return (
    <>
          <div>
            <label>What </label>
            <select onChange={(e) => setWhat(e.target.value)}>
              <option value="Feature">Feature</option>
              <option value="Bug">Bug</option>
              <option value="Database">Database</option>
            </select>
          </div>
          <div>
            <label>Priority </label>
            <select onChange={(e) => setPriority(e.target.value)}>
              <option value="Low">Low</option>
              <option value="Moderate">Moderate</option>
              <option value="High">High</option>
              <option value="Critical">Critical</option>
            </select>
          </div>
        </>
  )
}
