import Tours from "../tours/Tours.js";
import "./Home.css";

function Home(props) {
    return(
        <div id="main">
        <Tours myData={props.data}/>
        </div>
    );
}

export default Home;

