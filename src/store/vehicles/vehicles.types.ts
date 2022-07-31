export const enum VehiclesActionType {
    GET_VEHICLES_BY_PAGE = 'vehicles/GET_VEHICLES_BY_PAGE',
    GET_VEHICLES_BY_ID = 'vehicles/GET_VEHICLES_BY_ID'
}

export type VehiclesState = {
    readonly dataEnd: boolean,
    readonly next: number,
    readonly items: Map<any, any>,
}

