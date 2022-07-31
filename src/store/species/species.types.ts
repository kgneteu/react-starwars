export const enum SpeciesActionType {
    GET_SPECIES_BY_PAGE = 'species/GET_SPECIES_BY_PAGE',
    GET_SPECIES_BY_ID = 'species/GET_SPECIES_BY_ID'
}

export type SpeciesState = {
    readonly dataEnd: boolean,
    readonly next: string,
    readonly items: Map<any, any>,
}
