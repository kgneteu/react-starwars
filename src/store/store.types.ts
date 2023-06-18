import store from "./index";

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch

export interface DataItem {
    name: string,
    title: string,
    id: number,
    films: string[],
    people: string[],
    pilots: string[],
    residents: string[],
    starships: string[],
    vehicles: string[],
    planets: string[],
    species: string[],
    characters: string[]

    [index: string]: string | number | string[]
}

export interface DataItems {
    [index: number]: DataItem
}

export type DataSlice = {
    readonly dataEnd: boolean,
    readonly next: number,
    readonly items: DataItems,
}

export type AppState = RootState & { [index: string]: DataSlice };
export type AppGetState = () => AppState;

export type ActionWithPayload<T, P = any> = {
    type: T,
    payload: P
}
