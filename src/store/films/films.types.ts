export const enum FilmsActionType {
    GET_FILMS_BY_PAGE = 'films/GET_FILMS_BY_PAGE',
    GET_FILMS_BY_ID = 'films/GET_FILMS_BY_ID'
}

export type CategoriesState = {
    readonly dataEnd: boolean,
    readonly next: number,
    readonly items: Map<any, any>,
}

export interface FilmsState extends CategoriesState {};

