
import Tour from "./Tour/Tour";
import { Link } from "react-router-dom";

function Tours({ props }) {
  return (
    <div className='tour-list'>
      {props.map((tour) => (
        <div className='tour-preview' key={tour.id}>
          <Link to={`/tour/${tour.id}`}>
            <Tour tour={tour} />
          </Link>
        </div>
      ))}
    </div>
  );
}
export default Tours;
