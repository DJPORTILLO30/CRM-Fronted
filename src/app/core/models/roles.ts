export interface Role{
    id: number,
    name: string,
    description: string,
}

export interface createRoleDTO extends Omit<Role, 'id'>{
}