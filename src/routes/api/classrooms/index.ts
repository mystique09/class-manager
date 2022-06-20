import type { RequestEvent } from "@sveltejs/kit";

// endpoint to get all classrooms from a user
export function get() {
  return {
    status: 200,
    body: 'TODO!'
  };
}

// endpoint to create new classroom
export function post(event: RequestEvent) {
  return {
    status: 200,
    body: 'TODO!'
  };
}
