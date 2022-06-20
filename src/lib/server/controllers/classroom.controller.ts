import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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
    const newClass = await prisma.classroom.create({
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

export async function getClasses() {
    const classes = await prisma.classroom.findMany().limit(10);
    return classes;
}

export async function getClass(id: string) {
    const classroom = await prisma.classroom.findOne({
        where: {
            id
        }
    });
    return classroom;
}

export async function updateClass(id: string, classReq: ClassRequest) {
    const updatedClass = await prisma.classroom.update({
        where: {
            id: id
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

export async function deleteClass(id: string) {
    const deleteClass = await prisma.classroom.delete({
        where: {
            id: id
        }
    });
    return deleteClass;
}