export const enum StarshipsActionType {
    GET_STARSHIP_PAGE = 'starships/GET_STARSHIP_PAGE',
    GET_STARSHIPS = 'starships/GET_STARSHIPS'
}

export type StarshipsState = {
    readonly dataEnd: boolean,
    readonly next: number,
    readonly items: Map<any, any>,
}

