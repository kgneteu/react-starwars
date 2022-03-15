import {useParams} from "react-router";
import {LandingPage} from "../landingPage";



const PlanetPage = () => {
    const id = parseInt(useParams().id);
    return <LandingPage id={id} stateSlice={'planets'}/>;
};

export default PlanetPage;
