import { Prisma, User } from "@prisma/client";
import prisma from "../data-source";

export class UserService {
  static async allUsersService() {
    const users: User[] = await prisma.user.findMany();
    return users;
  }

  static async createUserService(userData: Prisma.UserCreateInput): Promise<User> {
    const user: User = await prisma.user.create({ data: userData });
    return user;
  }
}
