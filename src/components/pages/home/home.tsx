import FeaturedBox from '../../featuredBox';
import { getFilmsByPage } from '../../../store/films/films.actions';
import { getCharactersByPage } from '../../../store/characters/characters.actions';
import { getPlanetsByPage } from '../../../store/planets/planets.actions';
import { getStarshipsByPage } from '../../../store/starships/starships.actions';
import { getVehiclesByPage } from '../../../store/vehicles/vehicles.actions';
import { getSpeciesByPage } from '../../../store/species/species.actions';
import { Component } from 'react';

export class Home extends Component {
    render() {
        return (
            <>
                <FeaturedBox
                    title={'films'}
                    stateSlice={'films'}
                    getDataAction={getFilmsByPage}
                    alwaysVisible={true}
                />
                <FeaturedBox
                    title={'characters'}
                    stateSlice={'characters'}
                    getDataAction={getCharactersByPage}
                />
                <FeaturedBox
                    title={'starships'}
                    stateSlice={'starships'}
                    getDataAction={getStarshipsByPage}
                    enterLeft={true}
                />
                <FeaturedBox
                    title={'vehicles'}
                    stateSlice={'vehicles'}
                    getDataAction={getVehiclesByPage}
                />
                <FeaturedBox
                    title={'planets'}
                    stateSlice={'planets'}
                    getDataAction={getPlanetsByPage}
                    enterLeft={true}
                />
                <FeaturedBox
                    title={'species'}
                    stateSlice={'species'}
                    getDataAction={getSpeciesByPage}
                />
            </>
        );
    }
}
