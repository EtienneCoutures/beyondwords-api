
interface CatUnitAttributes {
    id: number;
    CategorieId: number;
    UnitId: number;
    prog: number;
}

export class CatUnit implements CatUnitAttributes {
    public id!: number;
    public CategorieId!: number;
    public UnitId!: number;
    public prog!: number;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}
