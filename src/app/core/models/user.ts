export interface User{
        id: number,
        name: string,
        email: string,
        phone: string,
        company: string,
        role: string,
        state: string,
        password: string
}

export interface createUserDTO extends Omit<User, 'id'>{
}