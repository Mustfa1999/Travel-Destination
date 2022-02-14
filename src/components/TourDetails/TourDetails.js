import {useParams} from 'react-router-dom';
import "./TourDetails.css";

export default function TourDetails(props) {

    let {id} = useParams();
    let myItem;
    
    for (let item of props.data) {
        if(item.id == id) {
            myItem = item;
        }        
    }

    let word = "";
    let h = "80px";
    if(props.myExtended) {
        word = "See less"; 
        h = "250px";
    } else {
        word = "See more"; 
        h = "80px";
    }

    return (
        <div id='info'>
            <h3> {myItem.name} </h3>
            <p id='parag' style={{height:`${h}`}}> {myItem.info} </p>
            <button onClick={props.myExtendedHandler}> {word} </button>
            <img src={myItem.image} alt={myItem.name}></img>
        </div> 
    );  

}
