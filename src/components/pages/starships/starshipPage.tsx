import { useParams } from 'react-router';
import { LandingPage } from '../landingPage/landingPage';

const StarshipPage = () => {
    const id = parseInt(useParams().id || '');
    return <LandingPage id={id} stateSlice={'starships'} />;
};

export default StarshipPage;
