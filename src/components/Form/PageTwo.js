import React from 'react'
import './form.css'


export const PageTwo = 
({ title, setTitle, descripton, setDescripton }) => {
  return (
    <>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        maxLength={15}
      />

      <textarea
        type="text"
        value={descripton}
        onChange={(e) => setDescripton(e.target.value)}
        placeholder="Descripton"
        maxLength={120}
        
      />
     
    </>
  );
};
