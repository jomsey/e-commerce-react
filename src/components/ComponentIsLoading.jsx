import "./ComponentIsLoading.css";
import Spinner from "./Spinner";

const ComponentIsLoading = () => {
    return (
        <div className="placeholder-filler">
            <div className="loader">
                <Spinner/>
                <h3>Loading ...</h3>
            </div>
        </div>
    );
}

export default ComponentIsLoading;
