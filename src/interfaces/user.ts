interface IUser {
    name: string;
}

export interface IUserService {
    findAllUsers: () => IUser[]
}