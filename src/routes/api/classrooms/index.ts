import type { RequestEvent } from "@sveltejs/kit";
import prisma from "$lib/prisma";
import { newClass } from "$lib/server/controllers/classroom.controller";

type CreateClass = {
  admin_id: string;
  name: string;
  description: string;
  section: string;
  room: string;
  subject: string;
}

// endpoint to get all classrooms from a user
export async function get() {
  try {
    const classrooms = await prisma.class.findMany();

    return {
      status: 200,
      body: classrooms
    }
  } catch (e: any) {
    return {
      status: 500,
      body: e.message
    }
  }
}

// endpoint to create new classroom
export async function post(event: RequestEvent) {
  const data: CreateClass = await event.request.json();

  try {
    const user = await newClass(data);

    return {
      status: 200,
      body: user
    }
  } catch (e: any) {
    return {
      status: 500,
      body: e.message
    }
  }
}
