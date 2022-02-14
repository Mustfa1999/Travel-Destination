function Tours(props) {
    return(
        <>
        {
            props.toursData.map(item => {
                return(
                    <div>
                        <h3> {item.name} </h3>
                        <img src={item.image} alt="image"></img>
                        <hr></hr>
                    </div>
                );
            })
        }
        </>
    );
}

export default Tours;