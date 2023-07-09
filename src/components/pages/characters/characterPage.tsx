import { useParams } from 'react-router';
import { LandingPage } from '../landingPage/landingPage';

const CharacterPage = () => {
    const id = parseInt(useParams().id || '');
    return <LandingPage id={id} stateSlice={'characters'} />;
};

export default CharacterPage;
