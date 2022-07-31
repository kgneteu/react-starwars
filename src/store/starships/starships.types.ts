export const enum StarshipsActionType {
    GET_STARSHIPS_BY_PAGE = 'starships/GET_STARSHIPS_BY_PAGE',
    GET_STARSHIPS_BY_ID = 'starships/GET_STARSHIPS_BY_ID'
}

export type StarshipsState = {
    readonly dataEnd: boolean,
    readonly next: number,
    readonly items: Map<any, any>,
}

