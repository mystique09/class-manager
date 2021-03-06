import { getUser } from "$lib/server/controllers/user.controller";
import type { RequestEvent } from "@sveltejs/kit";
import { serialize } from "cookie";

type UserRequest = {
    username: string;
    password: string;
}

// post endpoint
export async function post(event: RequestEvent) {
  const {username, password}: UserRequest = await event.request.json();

  // validate user input
    if (!username || !password) {
        return {
            status: 400,
            body: {
                message: 'Please provide an email and password.'
            }
        };
    }

    // check if user exists
    const user = await getUser(username);

    if (user.username === username) {
        return {
            status: 400,
            body: {
                message: 'User already exists.'
            }
        };
    }

    // validate user password
    if (password.length < 8) {
        return {
            status: 400,
            body: {
                message: 'Password must be at least 8 characters long.'
            }
        };
    }

    // check user password if the same
    if (password !== user?.password) {
        return {
            status: 400,
            body: {
                message: 'Incorrect password.'
            }
        };
    }

    return {
        status: 200,
        body: {
            message: 'User loggedin successfully.'
        },
        headers: {
          "Set-Cookie": serialize('session_token', 'testcookie', {
            path: '/',
            maxAge: 60 * 60 * 10,
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
          })
        }
      }
}