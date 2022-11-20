import React from 'react';
import spinner from '../assets/spinner.gif';

function Spiner() {
  return (
    <img src={spinner} alt='Loading...' style={{width : '100px', margin : 'auto', display : 'block'}}></img>
  )
}

export default Spiner