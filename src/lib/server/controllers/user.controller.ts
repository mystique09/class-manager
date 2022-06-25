import prisma from '$lib/prisma';

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
export async function getUsers() {
  const users = await prisma.user.findMany();

  return users;
}

// a controller to get a user by id
export async function getUser(uid: string) {
  const user = await prisma.user.findUnique({
    where: {
      uid
    }
  });

  return user;
}

// a controller to get user by username
export async function getUserByUsername(username: string) {
  const user = await prisma.user.findUnique({
    where: {
      username
    }
  });

  return user;
}

// a ctonroller to update a user
export async function updateUser(uid: string, username: string, password: string, email: string) {
  const updated_user = await prisma.user.update({
    where: {
      uid
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
export async function deleteUser(uid: string) {
  const deleted_user = await prisma.user.delete({
    where: {
      uid
    }
  });
  return deleted_user;
}
