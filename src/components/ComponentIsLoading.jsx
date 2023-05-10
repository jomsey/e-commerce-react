import "./ComponentIsLoading.css";
import Spinner from "./Spinner";

const ComponentIsLoading = () => {
    return (
        <div className="placeholder-filler component-loading">
            <div className="loader">
                <Spinner/>
                <h3>Loading <span></span><span></span><span></span></h3>
            </div>
        </div>
    );
}

export default ComponentIsLoading;
