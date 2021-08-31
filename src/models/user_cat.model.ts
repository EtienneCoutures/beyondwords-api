interface UserCatAttributes {
    id: number;
    UserId: number;
    CategorieId: number;
    prog: number;
}


export class UserCat implements UserCatAttributes {
    public id!: number;
    public UserId!: number;
    public CategorieId!: number;
    public prog!: number;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}



