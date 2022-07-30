export const enum PlanetsActionType {
    GET_PLANET_PAGE = 'planets/GET_PLANET_PAGE',
    GET_PLANETS = 'planets/GET_PLANETS'
}

export type PlanetsState = {
    readonly dataEnd: boolean,
    readonly next: string,
    readonly items: Map<any, any>,
}
