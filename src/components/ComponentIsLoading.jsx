import "./ComponentIsLoading.css";
import loaderImage from "../assets/loader.gif"

const ComponentIsLoading = () => {
    return (
        <div className="placeholder-filler">
            <div className="loader">
                <img src={loaderImage}/>
                <h3>Loading ...</h3>
            </div>
        </div>
    );
}

export default ComponentIsLoading;
