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
  return new_user;
}

// a controller to get all user includeing its postt
// limit to 10 users and 10 posts
export async function getUsers(id: string) {
  const users = await prisma.user.findMany().include({
    posts: true
  }).limit(10);

  return users;
}

// a ctonroller to update a user
export async function updateUser(id: string, username: string, password: string, email: string) {
  const updated_user = await prisma.user.update({
    where: {
      id
    },
    data: {
      username,
      password,
      email
    }
  });
  return updated_user;
}

// a controller to delete a user
export async function deleteUser(id: string) {
  const deleted_user = await prisma.user.delete({
    where: {
      id
    }
  });
  return deleted_user;
}
