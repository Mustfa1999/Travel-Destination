import Tour from "./tour/Tour.js";
import {Link} from "react-router-dom";
import "./Tours.css";

function Tours(props) {
    return(
        <div id="mainDiv">
        {
            props.myData.map(item => {
                return(
                    <Link id="card" to={`/city/${item.id}`}> <Tour tour={item} key={item.id}/> </Link>
                );
            })
        }
        </div>
    );
}

export default Tours;
