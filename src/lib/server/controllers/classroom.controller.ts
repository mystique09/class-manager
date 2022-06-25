import prisma from "$lib/prisma";

// a type for user request, used to get user data in parameter
type ClassRequest = {
  name: string;
  description: string;
  section: string;
  room: string;
  subject: string;
}

// a controller to create new class
export async function newClass(classReq: ClassRequest) {
  const newClass = await prisma.class.create({
    data: {
      name: classReq.name,
      description: classReq.description,
      section: classReq.section,
      room: classReq.room,
      subject: classReq.subject
    }
  });
  return newClass;
}

// a controller to get all class
export async function getClasses() {
  const classes = await prisma.class.findMany();
  return classes;
}

// a controller to get class by id
export async function getClass(uid: string) {
  const classroom = await prisma.class.findUnique({
    where: {
      uid
    }
  });
  return classroom;
}

// a controller to get update class by id
export async function updateClass(uid: string, classReq: ClassRequest) {
  const updatedClass = await prisma.class.update({
    where: {
      uid     
    },
    data: {
      name: classReq.name,
      description: classReq.description,
      section: classReq.section,
      room: classReq.room,
      subject: classReq.subject
    }
  });
  return updatedClass;
}

// a controller to get delete class by id
export async function deleteClass(uid: string) {
  const deleteClass = await prisma.class.delete({
    where: {
      uid
    }
  });
  return deleteClass;
}
