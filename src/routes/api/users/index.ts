import type { RequestEvent } from "@sveltejs/kit";

// endpoint to get all user
export function get() {
  return {
    status: 200,
    body: 'TODO!'
  };
}

// endpoint to create new user
export function post(event: RequestEvent) {
  return {
    status: 200,
    body: 'TODO!'
  };
}
