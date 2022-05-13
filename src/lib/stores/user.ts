import { writable, type Writable } from "svelte/store";
const store: Writable<string[]> = writable([]);

function createUserStore() {
  return {
    newUser,
    updateUser,
    deleteUser,
    getUser,
    subscribe: store.subscribe
  };
}

async function newUser() { }
async function updateUser() { }
async function deleteUser() { }
async function getUser() { }

export const userStore = createUserStore();
