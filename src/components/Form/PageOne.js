import React from 'react'

export const PageOne = ({title, setTitle,descripton, setDescripton}) => {
  return (
    <>
    <label>Title </label>
    <input
      type="text"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />

    <label>Descripton</label>
    <input
      type="text"
      value={descripton}
      onChange={(e) => setDescripton(e.target.value)}
    />
  </>
  )
}
