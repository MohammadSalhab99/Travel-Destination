import toursData from "../../data/db.json"

function Tours(props){
    return (
        <div>
         {    props.data.map(tour=>{
                return(
                 <>
                <h1>Name : {tour.name} </h1>
                <img src={tour.image}/>
                </>
                )
         })

}
        </div>
    );
}
export default Tours;