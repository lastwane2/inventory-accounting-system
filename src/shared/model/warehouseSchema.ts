export interface IWarehouse {
    id?: string,
    name?: string,
    location?: string,
    contents?: IContents[],
    createdAt?: string,
    updatedAt?: string,
}

interface IContents {
    id?: string,
    name?: string,
    material?: string,
    quantity?: number,
    unit?: UnitValues,
    area?: number;         
    volume?: number;        
    notes?: string; 
}

enum UnitValues {
    m2,
    pcs,
    kg,
    m3,
    l,
    custom
}