import React from 'react'
function Tour({tour}) {
  return (
    <div className='tour'>
      <h1> Name: {tour.name} </h1>
      <div className='tour-image'>
        <img src={tour.image} />
      </div>
    </div>
  );
}
export default Tour;
