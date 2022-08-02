import {RootState} from "./index";

interface DataItem {
    name: string,
    title: string,
    id: number,

    [index: string]: string | number
}

interface DataItems {
  [index: number]: DataItem
}

export type DataSlice = {
    readonly dataEnd: boolean,
    readonly next: number,
    readonly items: DataItems,
}

export type AppState = RootState & { [index: string]: DataSlice };
