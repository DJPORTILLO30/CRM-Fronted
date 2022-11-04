export interface Permission{
    id: number,
    name: string,
    description: string,
}

export interface createPermissionDTO extends Omit<Permission, 'id'>{
}