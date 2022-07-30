export const enum SpeciesActionType {
    GET_SPECIES_PAGE = 'species/GET_SPECIES_PAGE',
    GET_SPECIES = 'species/GET_SPECIES'
}

export type SpeciesState = {
    readonly dataEnd: boolean,
    readonly next: string,
    readonly items: Map<any, any>,
}
