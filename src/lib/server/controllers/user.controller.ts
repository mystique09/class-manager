import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type UserResponse = {
  username: string;
  password: string;
}

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

// a controller to get a user by id
export async function getUser(id: string) {
  const user = await prisma.user.findOne({
    where: {
      id
    }
  });

  return user as UserResponse;
}

// a controller to get user by username
export async function getUserByUsername(username: string) {
  const user = await prisma.user.findOne({
    where: {
      username
    }
  });

  return user as UserResponse;
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
