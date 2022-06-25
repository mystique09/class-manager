import { getUsers } from "$lib/server/controllers/user.controller";

// endpoint to get all user
export async function get() {
  try {
    let users = await getUsers();

    return {
      status: 200,
      body: users
    };
  } catch(e: any) {
    return {
      status: 500,
      body: e.message
    }
  }
}
