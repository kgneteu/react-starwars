export const enum CharactersActionType {
    GET_CHARACTERS_BY_PAGE = 'characters/GET_CHARACTERS_BY_PAGE',
    GET_CHARACTERS_BY_ID = 'characters/GET_CHARACTERS_BY_ID'
}

export type CharactersState = {
    readonly dataEnd: boolean,
    readonly next: string,
    readonly items: Map<any, any>,
}





