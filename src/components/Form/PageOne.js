import React from 'react'

export const PageOne = ({title, setTitle,descripton, setDescripton}) => {
  return (
    <>
    
    <input
      type="text"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      placeholder='Title'
    />

   
    <input
      type="text"
      value={descripton}
      onChange={(e) => setDescripton(e.target.value)}
      placeholder='Descripton'
    />
  </>
  )
}
