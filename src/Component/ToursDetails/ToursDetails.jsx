import React, { useState } from "react";
import toursData from "../../data/db.json";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

function ToursDetails(props) {
  let { id } = useParams();
  const getTourData = () => {
    let lol = toursData;
    const dataOfTour = lol.filter((data) => data.id === id);
    return dataOfTour;
  };
  const dataOfTour = getTourData();
  const [readMore, setReadMore] = useState(false);

  return (
    <div className='tour-details'>
      <aritcle>
        <h2>{dataOfTour[0].name}</h2>
        <p>
          {readMore
            ? dataOfTour[0].info
            : `${dataOfTour[0].info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "read more"}
          </button>
        </p>
        <div className='tour-images'>
          <img src={dataOfTour[0].image} alt='Tour' />
        </div>
        <div>Price: {dataOfTour[0].price} $</div>
<br/>
      </aritcle>
    </div>
  );
}

export default ToursDetails;
