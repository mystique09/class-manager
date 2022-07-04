import { getUserByUsername, newUser } from "$lib/server/controllers/user.controller";
import type { RequestEvent } from "@sveltejs/kit";

type UserRequest = {
  username: string;
  password: string;
  email: string;
}

const validateEmail = (email: string) => {
  const emailRegex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;

  return emailRegex.test(email);
}

export async function post(event: RequestEvent) {
  const { username, email, password }: UserRequest = await event.request.json();
  // validate user input
  if (!username || !email || !password) {
    return {
      status: 400,
      body: {
        message: 'Please provide an email and password.'
      }
    };
  }

  // check if input length is met
  if (username.length < 3 || password.length < 8) {
    return {
      status: 400,
      body: {
        message: 'Username and password must be at least 3 characters long.'
      }
    };
  }

  try {
    // check if user exists
  const user = await getUserByUsername(username);

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

  // validate email input using regex
  if (!validateEmail(email)) {
    return {
      status: 400,
      body: {
        message: 'Please provide a valid email.'
      }
    };
  }

  if (user.username === username) {
    return {
      status: 400,
      body: {
        message: 'User already exists.'
      }
    };
  }

  // validate user password
  if (password !== user.password) {
    return {
      status: 400,
      body: {
        message: 'Incorrect password.'
      }
    };
  }

  // create user
  const new_user = await newUser(username, email, password);

  return {
    status: 200,
    body: {
      message: 'User created successfully.'
    }
  };
  } catch(e: any) {
    return {
      status: 400,
      body: {
        message: e.message
      }
    }
  }
}
