import React from 'react'

export const PageThree = ({setType, setWho}) => {
  return (
    <>
   
      <select onChange={(e) => setType(e.target.value)}>
        <option value="Planned">Planned</option>
        <option value="Ready for Development">
          Ready for Development
        </option>
        <option value="In Development">In Development</option>
        <option value="Ready for Review">Ready for Review</option>
      </select>
   
    
  
      <select onChange={(e) => setWho(e.target.value)}>
        <option value="Frontend">Frontend</option>
        <option value="Backend">Backend</option>
        <option value="Designer">Designer</option>
        <option value="Other">Other</option>
      </select>
  
  </>
  )
}
