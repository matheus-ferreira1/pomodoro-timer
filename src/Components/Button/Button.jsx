import React from 'react';
import './Button.css'

const Button = ({ name, onClick }) => {
   return (
      <button
         name={name}
         className='btn'
         onClick={event => onClick(name)}
      >
         {name}
      </button>
   )
}

export default Button