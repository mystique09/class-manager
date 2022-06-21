import { getUsers } from "$lib/server/controllers/user.controller";
import type { RequestEvent } from "@sveltejs/kit";

// endpoint to get all user
export async function get() {
  let users = await getUsers();

  return {
    status: 200,
    body: users
  };
}
