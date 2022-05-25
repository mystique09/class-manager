import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function newUser(username: string, password: string, email: string) {
    const new_user = await prisma.user.create({
        data: {
            username,
            password,
            email
        }
    });
}

export async function getUsers(id: string) {
    const users = await prisma.user.findMany();
    return users;
}