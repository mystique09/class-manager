import type { RequestEvent } from "@sveltejs/kit";

// endpoint to get one user
export async function get(event: RequestEvent) {
  return {
    status: 200,
    body: 'TODO!'
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
  return {
    status: 200,
    body: 'TODO!'
  };
}
