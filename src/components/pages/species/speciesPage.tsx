import {useParams} from "react-router";
import {LandingPage} from "../landingPage/landingPage";


const SpeciesPage = () => {
    const id = parseInt(useParams().id || '');
    return <LandingPage id={id} stateSlice={'species'}/>;
};

export default SpeciesPage;
