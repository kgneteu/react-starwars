export const enum PlanetsActionType {
    GET_PLANETS_BY_PAGE = 'planets/GET_PLANETS_BY_PAGE',
    GET_PLANETS_BY_ID = 'planets/GET_PLANETS_BY_ID'
}

export type PlanetsState = {
    readonly dataEnd: boolean,
    readonly next: string,
    readonly items: Map<any, any>,
}
