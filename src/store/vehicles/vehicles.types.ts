export const enum VehiclesActionType {
    GET_VEHICLE_PAGE = 'vehicles/GET_VEHICLE_PAGE',
    GET_VEHICLES = 'vehicles/GET_VEHICLES'
}

export type VehiclesState = {
    readonly dataEnd: boolean,
    readonly next: number,
    readonly items: Map<any, any>,
}

