import { deleteUser, getUser, updateUser } from "$lib/server/controllers/user.controller";
import type { RequestEvent } from "@sveltejs/kit";

type UpdateRequest = {
  username: string;
  password: string;
  email: string;
}

// endpoint to get one user
export async function get(event: RequestEvent) {
  try {
    let user = await getUser(event.params.slug);

    return {
      status: 200,
      body: user
    }; 
  } catch (e: any) {
    return {
      status: 500,
      body: e.message
    }; 
  }
}

// endpoint to update user
export async function put(event: RequestEvent) {
  const data: UpdateRequest = await event.request.json();
  try {
    const user = await updateUser(event.params.slug, data.username, data.password, data.email);

    return {
      status: 200,
      body: {
        message: `User ${event.params.slug} deleted`,
        data: user
      }
    };
  } catch(e: any) {
    return {
      status: 500,
      body: e.message
    }; 
  }
}

// endpoint to delete user
export async function del(event: RequestEvent) {
  try {
    let user = await deleteUser(event.params.slug);

    return {
      status: 200,
      body: {
        message: `User ${event.params.slug} deleted`,
        data: user
      }
    };
  } catch(e: any) {
    return {
      status: 500,
      body: e.message
    }; 
  }
}
