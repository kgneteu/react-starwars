export const enum CharactersActionType {
    GET_CHARACTER_PAGE = 'characters/GET_CHARACTER_PAGE',
    GET_CHARACTERS = 'characters/GET_CHARACTERS'
}

export type CharactersState = {
    readonly dataEnd: boolean,
    readonly next: string,
    readonly items: Map<any, any>,
}





