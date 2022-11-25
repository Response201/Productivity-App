import React from 'react'

export const PageThree = ({setType, setWho}) => {
  return (
    <>
    <div>
      <label>Type </label>
      <select onChange={(e) => setType(e.target.value)}>
        <option value="Planned">Planned</option>
        <option value="Ready for Development">
          Ready for Development
        </option>
        <option value="In Development">In Development</option>
        <option value="Ready for Review">Ready for Review</option>
      </select>
    </div>
    <div>
      <label>For </label>
      <select onChange={(e) => setWho(e.target.value)}>
        <option value="Frontend">Frontend</option>
        <option value="Backend">Backend</option>
      </select>
    </div>
  </>
  )
}
