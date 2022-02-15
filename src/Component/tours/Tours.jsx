import toursData from "../../data/db.json";
import Tour from "./Tour/Tour";
import { Link, useParams } from "react-router-dom";


function Tours(){
    
    return (
        
        <>
        <Tour data={toursData}/>
        </>
        
    );
}
export default Tours;