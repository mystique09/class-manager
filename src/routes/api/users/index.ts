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

// endpoint to create new user
export function post(event: RequestEvent) {
  return {
    status: 200,
    body: 'TODO!'
  };
}
