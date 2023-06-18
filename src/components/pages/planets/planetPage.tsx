import {useParams} from "react-router";
import {LandingPage} from "../landingPage/landingPage";


const PlanetPage: () => JSX.Element = () => {
    const id = parseInt(useParams().id || '');
    return <LandingPage id={id} stateSlice={'planets'}/>;
};

export default PlanetPage;
