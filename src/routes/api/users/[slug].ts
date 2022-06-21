import { deleteUser, getUser } from "$lib/server/controllers/user.controller";
import type { RequestEvent } from "@sveltejs/kit";

// endpoint to get one user
export async function get(event: RequestEvent) {
  let user = await getUser(event.params.slug);

  return {
    status: 200,
    body: user
  };
}

// endpoint to update user
export async function put(event: RequestEvent) {
  return {
    status: 200,
    body: 'TODO!'
  };
}

// endpoint to delete user
export async function del(event: RequestEvent) {
  let user = await deleteUser(event.params.slug);

  return {
    status: 200,
    body: `User ${user.id} deleted`
  };
}
