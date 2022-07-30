export const enum FilmsActionType {
    GET_FILM_PAGE = 'films/GET_FILM_PAGE',
    GET_FILMS = 'films/GET_FILMS'
}

export type FilmsState = {
    readonly dataEnd: boolean,
    readonly next: string,
    readonly items: Map<any, any>,
}


