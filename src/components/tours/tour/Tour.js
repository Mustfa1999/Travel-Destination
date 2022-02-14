import "./Tour.css";

function Tour(props) {
    return(
        <div id="myCard">
            <h3> {props.tour.name} </h3>
            <div id="sub">
                <img src={props.tour.image} alt={props.tour.name}></img>
            </div>
        </div>
    );
}

export default Tour;