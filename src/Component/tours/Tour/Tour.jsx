// import React, { useState } from 'react';
// import { Link } from "react-router-dom";
// import { Link, useParams } from 'react-router-dom';
function Tour(props) {
  return (
    <div>
      {
        props.data.map((tour) => {
            // // let { id } = useParams();
            // function HandlePage(){
            //     return(
            //         <ToursDetails/>
            //     )
            // }
        return (
          <>
            <h1> Name: {tour.name} </h1>
             <img src={tour.image} />
          </>
   
        );
      })
      }
    </div>
  );
    }
export default Tour;
