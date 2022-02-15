

function ToursDetails(props) {
 
  return (
    <div>
     
      {props.data.map((tour) => {
        return (
          <>
            <h1> Name: {tour.id.name} </h1>
             <img src={tour.id.image} />
          </>
        );
      })}
    </div>
  );
}

export default ToursDetails;
