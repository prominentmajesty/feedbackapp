import React from 'react';
import { useParams, Routes, Route } from 'react-router-dom';

function Post() {
    // const params = useParams();
  return (
    <div>
        {/* <h1>{params._id}</h1> */}
        <h1>Post Here...</h1>
        {/* <button onClick={onClick}></button> */}
        <Routes>
            <Route path='/show' element={<h1>Hello World...</h1>} />
        </Routes>
    </div>
  )
}

export default Post