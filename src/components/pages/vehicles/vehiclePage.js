import {useParams} from "react-router";
import {LandingPage} from "../../landingPage";



const VehiclePage = () => {
    const id = parseInt(useParams().id);
    return <LandingPage id={id} stateSlice={'vehicles'}/>;
};

export default VehiclePage;
