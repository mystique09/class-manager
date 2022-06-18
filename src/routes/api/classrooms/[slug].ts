import { getUser } from "$lib/server/controllers/user.controller";

export async function post({slug}: {slug: string}) {
    const classrooms = await getUser(slug);
    return {
        status: 200,
        body: classrooms
    };
}