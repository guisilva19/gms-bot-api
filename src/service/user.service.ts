import prisma from "../data-source";

export class UserService {
  static async allUsersService() {
    const users = await prisma.user.findMany();
    return users;
  }

  static async createUserService(userData: any) {
    const user = await prisma.user.create({ data: userData });
    return user;
  }
}
